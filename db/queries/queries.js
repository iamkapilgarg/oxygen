const knex = require('../../lib/db');

const listListings = () => {
  return knex('listings')
    .join('resources', 'listings.resource_id', 'resources.id')
    .join('users', 'listings.user_id', 'users.id')
    .select('users.id',
      'users.name',
      'users.phone_number',
      'users.city',
      'users.state',
      'users.area',
      'users.pincode',
      'resources.name',
      'listings.quantity',
      'listings.listing_type',
      'listings.oxygen_level'
    );
}

const addResource = (name) => {
  return knex('resources').insert({
    name: name,
  });
}

const listResources = () => {
  return knex('resources')
    .select('*');
}

const postListing = (list) => {
  console.log("List on the way ", list);

  return knex("listings").insert({
    user_id: list.user_id,
    resource_id: list.resource_id,
    quantity: list.quantity,
    listing_type: list.listing_type,
    oxygen_level: list.oxygen_level,
    state : list.state,
    city: list.city,
    area : list.area,
    pincode : list.pincode
  });
};

const deleteListing = (id) => {
  return knex('listings')
    .where('id', id)
    .del();
}

const updateListing = (id, listing) => {
  console.log(id, listing)
  return knex('listings')
    .where('id', id)
    .update(listing);
}

module.exports = {
  listListings,
  addResource,
  listResources,
  postListing,
  deleteListing,
  updateListing
}
