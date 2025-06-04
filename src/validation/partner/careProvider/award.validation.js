const Joi = require("joi");
const commonValidation = require("../../common.validation");

const createAwardSchema = Joi.object({
  awardDescription: Joi.string().trim().required(),
  cpId: commonValidation.sqlGuId(),
  sequence: Joi.number().allow("", null),
  status: Joi.number().valid(1, 2),
});

const updateAwardSchema = createAwardSchema.keys({
  awardId: commonValidation.sqlGuId(),
});

module.exports = { createAwardSchema, updateAwardSchema };
