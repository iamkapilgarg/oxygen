const knex = require('../../lib/db');

const listListings = () => {
    return knex('listings')
        .join('resources', 'listings.resource_id', 'resources.id')
        .join('users', 'listings.user_id', 'users.id')
        .select('users.id',
            'users.name as username',
            'users.phone_number',
            'listings.city',
            'listings.state',
            'listings.area',
            'listings.pincode',
            'resources.name',
            'listings.quantity',
            'listings.listing_type',
            'listings.oxygen_level',
            'listings.id'
        );
}

const postListing = (list) => {
    return knex("listings").insert({
        user_id: list.user_id,
        resource_id: list.resource_id,
        quantity: list.quantity,
        listing_type: list.listing_type,
        oxygen_level: list.oxygen_level,
        state: list.state,
        city: list.city,
        area: list.area,
        pincode: list.pincode
    });
};

const getListingById = (id) => {
    return knex('listings')
        .join('resources', 'listings.resource_id', 'resources.id')
        .join('users', 'listings.user_id', 'users.id')
        .where('listings.id', id)
        .select('users.id',
            'users.name',
            'users.phone_number',
            'listings.city',
            'listings.state',
            'listings.area',
            'listings.pincode',
            'resources.name',
            'listings.quantity',
            'listings.listing_type',
            'listings.oxygen_level'
        );
}

const listListingsByUserId = (id) => {
    return knex('listings')
        .join('resources', 'listings.resource_id', 'resources.id')
        .join('users', 'listings.user_id', 'users.id')
        .where('users.id', id)
        .select('users.id',
            'users.name',
            'users.phone_number',
            'listings.city',
            'listings.state',
            'listings.area',
            'listings.pincode',
            'resources.name',
            'listings.quantity',
            'listings.listing_type',
            'listings.oxygen_level',
            'listings.id as listingId'
        );
}

const deleteListingById = (id) => {
    return knex('listings')
        .where('id', id)
        .del();
}

const updateListingById = (id, listing) => {
    return knex('listings')
        .where('id', id)
        .update(listing);
}

module.exports = {
    postListing,
    getListingById,
    deleteListingById,
    updateListingById,
    listListings,
    listListingsByUserId
}
