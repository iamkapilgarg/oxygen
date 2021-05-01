const db = require('../../lib/db');

const listListings = () => {
  return db.query(`SELECT * FROM listings
    join resources on listings.resource_id = resources.id
    join users on listings.user_id = users.id;`)
    .then(res => {
      return res.rows;
    })
}

module.exports = {
  listListings
}
