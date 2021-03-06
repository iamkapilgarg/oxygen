require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { addUsers, getUserByPhone } = require('../db/queries/users_queries')


router.get("/", (req, res) => {
  res.render('register')
});

/** Route for user registration */
router.post('/', (req, res) => {
  let id = generateRandomString(8);
  if (!req.body.phone || !req.body.password || !req.body.name) {
    res.status(400);
    res.render('error', {errorMessage: 'Field blank'});
    return;
  }
  getUserByPhone(req.body.phone).then((data) =>{
    if(data.length === 0) {
      let user = {
        name: req.body.name,
        phone_number: req.body.phone,
        password: bcrypt.hashSync(req.body.password, 10),
        id
      };
      addUsers(user).then((err) => {
        console.log(err)
      })
      req.session.userId = id;
      req.session.username = req.body.name
      res.redirect('listings');
    } else {
      res.status(400);
      res.render('error', {errorMessage: 'Phone already exists'});
      return;
    }
  })
});

const generateRandomString = function(length) {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};


module.exports = router;
