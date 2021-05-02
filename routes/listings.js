require('dotenv').config();
const express = require('express');
const router = express.Router();
const { listListings, listResources, postListing, deleteListing, updateListing, getUserById } = require('../db/queries/queries')


router.get("/", (req, res) => {
  let cookiesUserId = req.session.userId;
  getUserById(cookiesUserId).then((user) => {
    let username = undefined
    if(user.length > 0) {
      username = user[0].name
    }
    listListings().then(data => {
      const templateVars = {
        'data': data,
        username
      };
      console.log(templateVars)
      res.render('listings', templateVars);
    });
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
