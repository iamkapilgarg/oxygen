require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');


router.get("/", (req, res) => {
  res.render('register')
});

/** Route for user registration */
router.post('/', (req, res) => {
  let id = generateRandomString(8);
  if (!req.body.phone || !req.body.password || !req.body.name) {
    res.status(400);
    res.render('error', {errorMessage: errorMessages.BLANK_EMAIL_PASSWORD});
    return;
  }
  users=[{}];
  if (isPhoneExist(req.body.phone, users)) {
    res.status(400);
    res.render('error', {errorMessage: errorMessages.PHONE_ALREADY_EXIST});
    return;
  }
  let user = {
    name: req.body.name,
    phone: req.body.email,
    password: bcrypt.hashSync(req.body.password, 10),
    id
  };
  //users[id] = user;
  console.log(id)
  req.session.userId = id;
  res.redirect('/listings');
});

const generateRandomString = function(length) {
  let result = '';
  let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
};

const isPhoneExist = function(phone, users) {
  // for (let key in users) {
  //   if (users[key].phone === phone) {
  //     return true;
  //   }
  // }
  return false;
};


module.exports = router;
