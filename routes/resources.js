require('dotenv').config();
const express = require('express');
const router = express.Router();
const { addResource } = require('../db/queries/queries')


router.post("/new", (req, res) => {
    console.log(req.body)
  addResource(req.body['name']).then(data => {
    res.render('resources');
  });
});

module.exports = router;
