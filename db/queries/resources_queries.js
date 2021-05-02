const knex = require('../../lib/db');

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
    addResource,
    listResources,
}