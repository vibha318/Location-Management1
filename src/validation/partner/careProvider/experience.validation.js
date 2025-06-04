const Joi = require("joi");
const commonValidation = require("../../common.validation");

const createExperienceSchema = Joi.object({
  designation: Joi.string().trim().required(),
  institute: Joi.string().trim().required(),
  fromDate: Joi.date().required(),
  tillDate: Joi.date().allow(null, ""),
  cpId: commonValidation.sqlGuId(),
  sequence: Joi.number().allow("", null),
  status: Joi.number().valid(1, 2),
});

const updateExperienceSchema = createExperienceSchema.keys({
  experienceId: commonValidation.sqlGuId(),
});

module.exports = { createExperienceSchema, updateExperienceSchema };
