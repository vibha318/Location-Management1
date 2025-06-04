const Joi = require("joi");
const commonValidation = require("../../common.validation");

const createPublicationSchema = Joi.object({
  publicationTitle: Joi.string().trim().required(),
  publicationLink: Joi.string().trim().required(),
  cpId: commonValidation.sqlGuId(),
  sequence: Joi.number().allow("", null),
  status: Joi.number().valid(1, 2),
});

const updatePublicationSchema = createPublicationSchema.keys({
  publicationId: commonValidation.sqlGuId(),
});

module.exports = { createPublicationSchema, updatePublicationSchema };
