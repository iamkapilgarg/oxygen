require('dotenv').config();
const express = require('express');
const router = express.Router();
const { listListings } = require('../db/queries/queries')


router.get("/", (req, res) => {
  listListings().then(data => {
    console.log(JSON.stringify(data))
    res.send(data)
  });
});

router.post('/', (req, res) => {
  console.log("req:",req);
  const user = {
    test : 'test'
  }
  res.status(201).json(req.body)
 })
 
module.exports = router;
