const knex = require('../../lib/db');

const addUsers = (user) => {
    return knex('users')
        .insert(user);
}

const getUserByPhone = (phone) => {
    return knex('users').where('phone_number', phone)
        .select('*');
}

const getUserById = (id) => {
    return knex('users').where('id', id)
        .select('*');
}

module.exports = {
    addUsers,
    getUserByPhone,
    getUserById
}
