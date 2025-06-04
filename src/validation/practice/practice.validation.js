const Joi = require("joi");
const commonValidation = require("../common.validation");

const createPracticeSchema = Joi.object({
  practiceId: Joi.allow("", null),
  ptTypeId: commonValidation.sqlGuId(),
  name: Joi.string().trim().required(),
  headline: Joi.string().trim().required(),
  bio: Joi.string().trim().required(),
  appointmentNumbers: Joi.string().trim().required(),
  emails: Joi.string().trim().required(),
  addressLine1: Joi.string().trim().allow(null, ""),
  addressLine2: Joi.string().trim().allow(null, ""),
  addressLine3: Joi.string().trim().allow(null, ""),
  locationCoords: Joi.string().trim().allow(null, ""),
  localityId: commonValidation.sqlGuId(),
  ownerId: commonValidation.sqlGuId().allow("", null),
  status: Joi.number(),
});

const updatePracticeSchema = createPracticeSchema.keys({
  practiceId: commonValidation.sqlGuId(),
});

module.exports = { createPracticeSchema, updatePracticeSchema };
