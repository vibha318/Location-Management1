const Joi = require("joi");
const commonValidation = require("../../common.validation");

const createRegistrationSchema = Joi.object({
  registrationNumber: Joi.string().required(),
  registrationAuthority: Joi.string().trim().required(),
  registrationYear: Joi.string().trim().required(),
  verificationStatus: Joi.string().trim().allow("", null),
  cpId: commonValidation.sqlGuId(),
  sequence: Joi.number().allow("", null),
  status: Joi.number().valid(1, 2),
});

const updateRegistrationSchema = createRegistrationSchema.keys({
  registrationId: commonValidation.sqlGuId(),
});

module.exports = { createRegistrationSchema, updateRegistrationSchema };
