require('dotenv').config();
const express = require('express');
const router = express.Router();
const { listListings } = require('../db/queries/queries')


router.get("/", (req, res) => {
  listListings().then(data => {
    const templateVars = {
      'data': data,
    };
    res.render('listings', templateVars);
  });
});

router.get("/new", (req, res) => {
  const resources = [{id: 1, name: "cylinder"}, {id: 2, name: "plasma"}, {id: 3, name: "concentrator"}]
  const templateVars = {
    'data': resources,
  };
  res.render('new_listing', templateVars);
});

router.post('/', (req, res) => {
  console.log("req:",req);
  const user = {
    test : 'test'
  }
  res.status(201).json(req.body)
 })

module.exports = router;
