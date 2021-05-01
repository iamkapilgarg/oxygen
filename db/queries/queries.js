const knex = require('../../lib/db');

const listListings = () => {
  return knex.schema.raw(`SELECT * FROM listings
    join resources on listings.resource_id = resources.id
    join users on listings.user_id = users.id;`)
    .then(res => {
      return res.rows;
    })
}

module.exports = {
  listListings
}
