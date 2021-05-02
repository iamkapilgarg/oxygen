require('dotenv').config();
const express = require('express');
const router = express.Router();
const { addResource } = require('../db/queries/queries')


router.post("/new", (req, res) => {
  addResource(req.body['name']).then(data => {
    res.status(201).redirect('/listings');
  });
});

router.get("/new", (req, res) => {
    res.render('new_resource');
});

module.exports = router;
