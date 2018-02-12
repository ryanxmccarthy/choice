const db = require("../models");
const crypto = require('crypto');

function hash(password) {
  return crypto.createHash('sha256').update(password).digest('base64');
}

module.exports = {
  create: (req, res) => {
    let userData = {
      email: req.body.email,
      password: hash(req.body.password)
    };
    db.createUser(userData, (err, response) => {
      if (err) {
        console.log(err)
      } else {
        res.send(response);
      }
    })
  },
  remove: (req, res) => {
    db.User.deleteUser(req.uid, (err, response) => {
      if (err) {
        console.log(err);
      } else {
        return response;
      }
    })
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