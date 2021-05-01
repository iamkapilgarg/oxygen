require("dotenv").config();
const express = require("express");
const router = express.Router();
const { listListings, postListing } = require("../db/queries/queries");

router.get("/", (req, res) => {
  listListings().then((data) => {
    const templateVars = {
      data: data,
    };
    res.render("listings", templateVars);
  });
});

router.post("/", (req, res) => {
  postListing(req.body)
    .then((data) => {
      console.log(data.rows);
      res.status(200);
    })
    .catch((err) => {
      console.log("Error in posting:", err);
      res.status(400).end();
    });
});

module.exports = router;
