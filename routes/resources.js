require('dotenv').config();
const express = require('express');
const router = express.Router();
const { addResource } = require('../db/queries/resources_queries')


router.post("/new", (req, res) => {
  addResource(req.body['name']).then(data => {
    res.status(201).redirect('/listings');
  });
});

router.get("/new", (req, res) => {
  let username = req.session.username;
    res.render('new_resource', {username});
});

module.exports = router;
