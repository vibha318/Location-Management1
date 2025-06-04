const Joi = require("joi");
const commonValidation = require("../common.validation");

const createFaqSchema = Joi.object({
  question: Joi.string().trim().min(10).required(),
  answer: Joi.string().trim().required(),
  cpId: commonValidation.sqlGuId(),
  status: Joi.number().valid(1, 2),
  sequence: Joi.number().allow("", null),
});

const updateFaqSchema = createFaqSchema.keys({
  faqId: Joi.string()
    .trim()
    .guid({ version: ["uuidv4", "uuidv5"] })
    .required(),
});

module.exports = { createFaqSchema, updateFaqSchema };
