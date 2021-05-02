const knex = require('../../lib/db');

const addUsers = (user) => {
    return knex('users')
        .insert(user);
}

module.exports = {addUsers}
