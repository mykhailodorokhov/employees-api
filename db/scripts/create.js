const env = process.env.ENVIRONMENT ?? "development";

const knexFullConfig = require("../../knexfile");
const knexConfig = knexFullConfig[env];

const dbName = knexConfig.connection.database;
knexConfig.connection.database = null;

const Knex = require("knex");
const knex = Knex(knexConfig);

async function createDatabase() {
  console.log(`\ncreating database ${dbName}...`);

  await knex.raw(`CREATE DATABASE ${dbName}`);
  console.log(`✅ database created`);

  await knex.destroy();
}

createDatabase();
