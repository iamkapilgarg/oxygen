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

module.exports = {
  listListings,
  addResource,
  listResources,
}
