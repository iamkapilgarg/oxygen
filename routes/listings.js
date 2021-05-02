require('dotenv').config();
const express = require('express');
const router = express.Router();
const { listListings, listResources, postListing } = require('../db/queries/queries')


router.get("/", (req, res) => {
  listListings().then(data => {
    const templateVars = {
      'data': data,
    };
    res.render('listings', templateVars);
  });
});

router.get("/new", (req, res) => {
  listResources().then(data => {
    const templateVars = {
      data
    };
    res.render('new_listing', templateVars);
  });
});

router.post("/", (req, res) => {
  console.log("Request Body:",req.body);
  postListing(req.body)
    .then((data) => {
      console.log(data);
      res.status(200).send();
    })
    .catch((err) => {
      console.log("Error in posting:", err);
      res.status(400).end();
    });
});


module.exports = router;
