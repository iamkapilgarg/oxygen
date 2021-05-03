require('dotenv').config();
const express = require('express');
const router = express.Router();
const { listResources } = require('../db/queries/resources_queries')
const { listListings, postListing, deleteListingById, updateListingById, getListingById, listListingsByUserId } = require('../db/queries/listings_queries');

const {places} = require('../resources/state-city')

router.get("/", (req, res) => {
  let username = req.session.username;
  listListings().then(data => {
    const templateVars = {
      'data': data,
      username
    };
    res.render('listings', templateVars);
  });
});

router.get("/new", (req, res) => {
  let username = req.session.username;
  listResources().then(data => {
    const templateVars = {
      data,
      username,
      'states':places
    };
    res.render('new_listing', templateVars);
  }).catch((err) => {
    console.log(err)
    })
});
router.get("/me", (req, res) => {
  const userId = req.session.userId;
  const username = req.session.username;
  listListingsByUserId(userId).then((data) => {
    const templateVars = {
      'data': data,
      username
    };
    res.render('userlistings', templateVars);
  })
});

router.post("/new", (req, res) => {
  const list = {
    user_id: req.session.userId,
    resource_id: req.body.resource,
    quantity: req.body.quantity!==undefined?req.body.quantity:1,
    listing_type: req.body.type,
    oxygen_level: req.body.oxygenlevel===undefined||req.body.oxygen_level===""?req.body.oxygenlevel:'1',
    state: req.body.State,
    city: req.body.City,
    area: req.body.area,
    pincode: req.body.pincode
}
  postListing(list)
    .then((data) => {
      res.status(200).redirect('/listings')
    })
    .catch((err) => {
      console.log(err)
      res.status(400).end();
    });
});

router.get("/:id", (req, res) => {
  let username = req.session.username;
  getListingById(req.params.id).then(data => {
    const templateVars = {
      listingId: req.params.id,
      data: data[0],
      username,
      'states':places
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
  console.log(req.body.data);
  updateListingById(req.params.id, updateListingObject(req.body.data))
    .then((data) => {
      res.status(200).redirect('/listings');
    })
    .catch((err) => {
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
    pincode: obj.pincode,
    lastmodified: new Date()
  }
}

module.exports = router;
