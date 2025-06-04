const Joi = require("joi");
const commonValidation = require("../../common.validation");

const createCpSpecialitySchema = Joi.object({
  specialityId: commonValidation.sqlGuId(),
  cpId: Joi.string().trim(),
  sequence: Joi.number(),
  status: Joi.number().valid(1, 2),
});

const updateCpSpecialitySchema = createCpSpecialitySchema.keys({
  cpSpecialityId: commonValidation.sqlGuId(),
});

module.exports = { createCpSpecialitySchema, updateCpSpecialitySchema };
