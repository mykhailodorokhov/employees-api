const { knex } = require("../../db/knex");
const redis = require("../../redis/redis");

const TABLE_NAME = "employees";

async function create(employee) {
  await knex(TABLE_NAME).insert(employee);
}

async function getAll(name, title, tribe) {
  const query = knex(TABLE_NAME)
    .select(
      knex.raw(
        "employees.name as name, employees.title as title, tribes.name as tribe"
      )
    )
    .join("tribes", "tribes.id", "employees.tribe_id");

  if (name) query.whereILike("employees.name", `%${name}%`);
  if (title) query.where({ title });
  if (tribe) query.where("tribes.name", tribe);

  return await query;
}

async function getById(id) {
  return await knex(TABLE_NAME).select().where({ id });
}

async function getEmployeesOfTribe(tribe_id) {
  await knex(TABLE_NAME).select().where({ tribe_id });
}

async function deleteById(id) {
  await knex(TABLE_NAME).select().where({ id }).del();
}

async function employeesReport() {
  const cache = await redis.get("employeesReport");
  if (cache) {
    return JSON.parse(cache);
  }

  const employees = await knex(TABLE_NAME)
    .select(
      knex.raw(
        "employees.name as name, employees.title as title, tribes.name as tribe"
      )
    )
    .join("tribes", "tribes.id", "employees.tribe_id");

  const report = {};
  for (employee of employees) {
    if (employee.tribe in report) {
      report[employee.tribe].push({
        name: employee.name,
        title: employee.title,
      });
    } else {
      report[employee.tribe] = [];
      report[employee.tribe].push({
        name: employee.name,
        title: employee.title,
      });
    }
  }

  await redis.set("employeesReport", JSON.stringify(report));

  return report;
}

module.exports = {
  create,
  getAll,
  getById,
  getEmployeesOfTribe,
  deleteById,
  employeesReport,
};
