require('dotenv').config();
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const {listListingsByUserId} = require('../db/queries/listings_queries');
const { use } = require('./listings');


router.get("/listings", (req, res) => {
  const userId = req.session.userId;
  const username = req.session.username;
  listListingsByUserId(userId).then((data) => {
    const templateVars = {
      'data': data,
      username
    };
    res.render('userlistings', templateVars);
  })
});

module.exports = router;
