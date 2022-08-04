const KoaJoiRouter = require("@koa-better-modules/joi-router");
const router = new KoaJoiRouter();

const tribesController = require("../controllers/tribes-controller");
const employeesSchemas = require("./schemas/employees-schemas");

router.route({
  method: "GET",
  path: "/tribes",
  handler: tribesController.getAll,
});

router.route({
  method: "GET",
  path: "/tribes/:id",
  validate: {
    params: employeesSchemas.byIdSchema,
  },
  handler: tribesController.getById,
});

router.route({
  method: "DELETE",
  path: "/tribes/:id/employees",
  validate: {
    params: employeesSchemas.byIdSchema,
  },
  handler: tribesController.getEmployeesOfTribe,
});

module.exports = router;
