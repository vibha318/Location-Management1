const Joi = require("joi");
const commonValidation = require("../../common.validation");

const createEducationSchema = Joi.object({
  degreeId: commonValidation.sqlGuId(),
  instituteName: Joi.string().trim().required(),
  passingYear: Joi.string().required(),
  achievement: Joi.string().trim().allow("", null),
  verificationStatus: Joi.string().trim().allow("", null),
  cpId: commonValidation.sqlGuId().required(),
  sequence: Joi.number().allow("", null),
  status: Joi.number().valid(1, 2),
});

const updateEducationSchema = createEducationSchema.keys({
  educationId: commonValidation.sqlGuId(),
});

module.exports = { createEducationSchema, updateEducationSchema };
