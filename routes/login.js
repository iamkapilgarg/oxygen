require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const {getUserByPhone} = require('../db/queries/queries')



router.get("/", (req, res) => {
  res.render('login')
});

router.post("/", (req, res) => {
  getUserByPhone(phone).then((data) =>{
    if(data.length === 0){
      res.status(403);
      res.render('error', {errorMessage: errorMessages.LOGIN_FAILED});
      return;
    }

    if (!matchPhonePassword(req.body.phone, req.body.password, data[0])) {
      res.status(403);
      res.render('error', {errorMessage: errorMessages.LOGIN_FAILED});
      return;
    }
    req.session.userId = data[0].id;
    res.redirect('/urls');
  });
});

const matchPhonePassword = function(phone, password, users) {
  for (let key in users) {
    if (users[key].phone_number === phone && bcrypt.compareSync(password, users[key].password)) {
      return true;
    }
  }
  return false;
};


module.exports = router;
