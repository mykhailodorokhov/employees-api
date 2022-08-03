const { knex } = require("../../db/knex");

const TABLE_NAME = "employees";

async function create(employee) {
  await knex(TABLE_NAME).insert(employee);
}

async function getAll(name, title, tribe) {
  const query = knex(TABLE_NAME).select();

  if (name) query.whereILike("name", `%${name}%`);
  if (title) query.where({ title });
  if (tribe) query.where({ tribe });

  return await query;
}

async function getById(id) {
  return await knex(TABLE_NAME).select().where({ id });
}

async function deleteById(id) {
  await knex(TABLE_NAME).select().where({ id }).del();
}

async function employeeReport() {
  const employees = await knex(TABLE_NAME).select();

  const report = {};
  for (employee of employees) {
    console.log(employee);
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

  return report;
}

module.exports = {
  create,
  getAll,
  getById,
  deleteById,
  employeeReport,
};
