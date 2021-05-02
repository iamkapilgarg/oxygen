require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const { getUserByPhone } = require('../db/queries/users_queries')



router.get("/", (req, res) => {
  res.render('login')
});

router.post("/", (req, res) => {
  getUserByPhone(req.body.phone).then((data) => {
    if (data.length === 0) {
      res.status(403);
      res.render('error', { errorMessage: 'Login failed' });
      return;
    }

    if (!matchPhonePassword(req.body.phone, req.body.password, data[0])) {
      res.status(403);
      res.render('error', { errorMessage: 'Login failed' });
      return;
    }
    req.session.userId = data[0].id;
    req.session.username = data[0].name;
    res.redirect('/listings');
  });
});

const matchPhonePassword = function (phone, password, user) {
  if (user.phone_number === phone && bcrypt.compareSync(password, user.password)) {
    console.log('returning true');
    return true;
  }
  console.log('returning false');
  return false;
};


module.exports = router;
