require('dotenv').config();
const express = require('express');
const router = express.Router();
const { listListings } = require('../db/queries/queries')


router.get("/", (req, res) => {
  listListings().then(data => {
    console.log(data)
    res.send(data)
  });
});

module.exports = router;
