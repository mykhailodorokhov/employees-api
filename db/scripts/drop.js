const { knex, knexConfig } = require("../knex");

async function drop() {
  const dbName = knexConfig.connection.database;
  await knex.raw(`DROP DATABASE ${dbName}`);

  console.log(`\n💥 Database ${dbName} dropped!`);

  await knex.destroy();
}

drop();
