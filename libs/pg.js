require("dotenv").config();
const knex = require("knex");

const writer = knex({
  client: "pg",
  connection: {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
  },
  pool: {
    min: 1,
  },
  acquireConnectionTimeout: 5000,
});

const reader = knex({
  client: "pg",
  connection: {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
  },
  pool: {
    min: 1,
  },
  acquireConnectionTimeout: 5000,
});

module.exports.Knex = { writer, reader };
