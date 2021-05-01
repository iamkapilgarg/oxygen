const knex = require("../../lib/db");

const listListings = () => {
  return knex.schema
    .raw(
      `SELECT * FROM listings
    join resources on listings.resource_id = resources.id
    join users on listings.user_id = users.id;`
    )
    .then((res) => {
      return res.rows;
    });
};

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
  postListing,
};
