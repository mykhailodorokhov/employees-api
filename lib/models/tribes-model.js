const { knex } = require("../../db/knex");

const TABLE_NAME = "tribes";

async function getAll(name, title, tribe) {
  return await knex(TABLE_NAME).select();
}

async function getById(id) {
  return await knex(TABLE_NAME).select().where({ id });
}

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
  employeesReport,
};
