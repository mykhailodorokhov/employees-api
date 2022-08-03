const KoaJoiRouter = require("@koa-better-modules/joi-router");
const Joi = KoaJoiRouter.Joi;

const createSchema = Joi.object({
  name: Joi.string().required(),
  title: Joi.string().required(),
  tribe: Joi.string().required(),
});

const getAllSchema = Joi.object({
  name: Joi.string(),
  title: Joi.string(),
  tribe: Joi.string(),
});

const byIdSchema = Joi.object({
  id: Joi.number().required(),
});

module.exports = {
  getAllSchema,
  createSchema,
  getByIdSchema,
  deleteByIdSchema,
};
