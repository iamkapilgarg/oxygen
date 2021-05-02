require('dotenv').config();
const express = require('express');
const router = express.Router();
const { listResources } = require('../db/queries/resources_queries')
const { listListings, postListing, deleteListingById, updateListingById, getListingById } = require('../db/queries/listings_queries');
const { getUserById } = require('../db/queries/users_queries')


router.get("/", (req, res) => {
  let username = req.session.username;
  listListings().then(data => {
    const templateVars = {
      'data': data,
      username
    };
    console.log(templateVars)
    res.render('listings', templateVars);
  });
});

router.get("/new", (req, res) => {
  let username = req.session.username;
  listResources().then(data => {
    const templateVars = {
      data,
      username
    };
    res.render('new_listing', templateVars);
  });
});

router.post("/", (req, res) => {
  console.log("Request Body:", req.body);
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

router.get("/:id", (req, res) => {
  let username = req.session.username;
  getListingById(req.params.id).then(data => {
    const templateVars = {
      'data': data[0],
      username
    };
    res.render('listing', templateVars);
  });
});

router.delete("/:id", (req, res) => {
  deleteListing(req.params.id)
    .then((data) => {
      res.status(204).redirect('/listings');
    })
});

router.patch("/:id", (req, res) => {
  updateListing(req.params.id, req.body)
    .then((data) => {
      res.status(200).redirect('/listings');
    })
    .catch((err) => {
      console.log("Error in updating:", err);
      res.status(400).end();
    });
});

module.exports = router;
