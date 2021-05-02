require('dotenv').config();
const express = require('express');
const router = express.Router();
const { listResources } = require('../db/queries/resources_queries')
const { listListings, postListing, deleteListingById, updateListingById, getListingById } = require('../db/queries/listings_queries');
const { getUserById } = require('../db/queries/users_queries')

const {places} = require('../resources/state-city')

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
  console.log("nikhil:",places);
  let username = req.session.username;
  listResources().then(data => {
    const templateVars = {
      data,
      username,
      'states':places
    };
    res.render('new_listing', templateVars);
  });
});

router.post("/new", (req, res) => {
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
  deleteListingById(req.params.id)
    .then((data) => {
      res.status(204).redirect('/listings');
    })
});

router.put("/:id", (req, res) => {
  updateListingById(req.params.id, updateListingObject(req.body.data))
    .then((data) => {
      res.status(200).redirect('/listings');
    })
    .catch((err) => {
      console.log("Error in updating:", err);
      res.status(400).end();
    });
});

const updateListingObject = obj => {
  return {
    quantity: obj.quantity,
    oxygen_level: obj.oxygen_level,
    city: obj.city,
    state: obj.state,
    area: obj.area,
    pincode: obj.pincode
  }
}

module.exports = router;
