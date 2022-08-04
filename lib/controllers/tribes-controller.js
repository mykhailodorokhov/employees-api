const tribesModel = require("../models/employees-model");
const employeesModel = require("../models/employees-model");

async function getAll(ctx) {
  ctx.status = 200;
  ctx.body = await tribesModel.getAll();
}

async function getById(ctx) {
  const id = ctx.params.id;
  const employee = await tribesModel.getById(id);

  ctx.status = 200;
  ctx.body = employee;
}

async function getEmployeesOfTribe(ctx) {
  const id = ctx.params.id;
  const employee = await employeesModel.getEmployeesOfTribe(id);

  ctx.status = 200;
  ctx.body = employee;
}

module.exports = {
  getAll,
  getById,
  getEmployeesOfTribe,
};
