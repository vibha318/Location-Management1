const Joi = require("joi");
const commonValidation = require("../../common.validation");

const createMembershipSchema = Joi.object({
  membershipInstituteName: Joi.string().trim().required(),
  memberSinceYear: Joi.string().trim().length(4).required(),
  cpId: commonValidation.sqlGuId(),
  sequence: Joi.number().allow("", null),
  status: Joi.number().valid(1, 2),
});

const updateMembershipSchema = createMembershipSchema.keys({
  membershipId: commonValidation.sqlGuId(),
});

module.exports = { createMembershipSchema, updateMembershipSchema };
