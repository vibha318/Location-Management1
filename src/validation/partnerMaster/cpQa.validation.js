const Joi = require("joi");

const createCpQaSchema = Joi.object({
  question: Joi.string().trim().required(),
  answer: Joi.string().trim().required(),
  status: Joi.number().valid(1, 2),
});

const updateCpQaSchema = createCpQaSchema.keys({
  cpQaId: Joi.string()
    .trim()
    .guid({ version: ["uuidv4", "uuidv5"] })
    .required(),
});

module.exports = { createCpQaSchema, updateCpQaSchema };
