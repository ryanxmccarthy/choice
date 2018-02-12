const router = require('express').Router();
const db = require('../../models');

module.exports = (app) => {
  router.post('/users', (req, res) => {
    db.User.create(req.body, (err, response) => {
      if (err) {
        console.log(err);
      } else {
        res.send(response)
      }
    })
  })
}