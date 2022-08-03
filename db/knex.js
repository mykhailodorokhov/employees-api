const env = process.env.ENVIRONMENT ?? "development";

const knexFullConfig = require("../knexfile");
const knexConfig = knexFullConfig[env];

console.log("💽 initializing database connection via knex...");

const host = knexConfig.connection.host;
const db = knexConfig.connection.database;
console.log(`environment: ${env}; host ${host}; db: ${db}`);

const Knex = require("knex");
const knex = Knex(knexConfig);

module.exports = { knex, knexConfig };
