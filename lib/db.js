module.exports = require('knex')({
  client: 'postgres',
  connection: {
    database: process.env.DB_URL,
    ssl: { rejectUnauthorized: false }
  },
});
