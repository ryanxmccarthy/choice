const db = require("../models");
const crypto = require('crypto');

function hash(password) {
  return crypto.createHash('sha256').update(password).digest('base64');
}

module.exports = {
  create: (req, res) => {
    let userData = {
      username: req.body.username,
      email: req.body.email,
      password: hash(req.body.password)
    };
    db.User
      .create(userData (err, user) => {
        if(err) {
          return err;
        } else {
          return res.redirect('/');
        }
      })
  },
  remove: (req, res) => {
    db.User
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  startSession: (req, res) => {
    db.User.findOne({ email: email })
      .exec((err, user) => {
        if(err) {
          return err;
        } else if (!user) {
          let err = new Error('User not found');
          err.status = 401;
          return err;
        }
        if(hash(req.body.password) === user.password) {
          return user;
        } else {
          return new Error('Password is incorrect');
        }
      })
  }
}