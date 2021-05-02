module.exports = require('knex')({
  client: 'postgres',
  connection: process.env.DB_URL,
  ssl: {
    rejectUnauthorized: true
  }
});
