const KoaJoiRouter = require("@koa-better-modules/joi-router");
const router = new KoaJoiRouter();

const employeesController = require("../controllers/employees-controller");
const employeesSchemas = require("./schemas/employees-schemas");

router.route({
  method: "POST",
  path: "/employees",
  validate: {
    body: employeesSchemas.createSchema,
    type: "json",
  },
  handler: employeesController.create,
});

router.route({
  method: "GET",
  path: "/employees",
  validate: {
    query: employeesSchemas.getAllSchema,
  },
  handler: employeesController.getAll,
});

router.route({
  method: "GET",
  path: "/employees/:id",
  validate: {
    params: employeesSchemas.byIdSchema,
  },
  handler: employeesController.getById,
});

router.route({
  method: "DELETE",
  path: "/employees/:id",
  validate: {
    params: employeesSchemas.byIdSchema,
  },
  handler: employeesController.deleteById,
});

router.get("/reports/employees", employeesController.employeesReport);

module.exports = router;
