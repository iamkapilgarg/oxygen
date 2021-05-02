const knex = require('../../lib/db');

const listListings = () => {
  return knex.schema.raw(`SELECT 
    users.id,
    users.name, 
    users.phone_number,
    users.city,
    users.state,
    users.area,
    users.pincode,
    resources.name,
    listings.quantity,
    listings.listing_type,
    listings.oxygen_level
    FROM listings
    join resources on listings.resource_id = resources.id
    join users on listings.user_id = users.id;`)
    .then(res => {
      return res.rows;
    })
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
  });
};

module.exports = {
  listListings,
  addResource,
  listResources,
  postListing
}
