const Joi = require("joi");
const commonValidation = require("../../common.validation");

const basicDetailsSchema = Joi.object({
  cpId: commonValidation.sqlGuId(),
  prefix: Joi.string().trim().required(),
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),
  dob: Joi.string().allow("", null),
  gender: Joi.number().valid(1, 2),
  bio: Joi.string().trim().required(),
});
const contactSchema = Joi.object({
  cpId: commonValidation.sqlGuId(),
  email: Joi.string().trim().email().required(),
  website: Joi.string()
    .pattern(/^(?!:\/\/)([a-zA-Z0-9-_]+\.)+[a-zA-Z]{2,}(:[0-9]{1,5})?(\/.*)?$/)
    .messages({
      "string.pattern.base": "Invalid URL format. Please provide a valid URL.",
    })
    .allow("", null),
});
const addressSchema = Joi.object({
  cpId: commonValidation.sqlGuId(),
  localityId: commonValidation.sqlGuId(),
  cityId: Joi.string().allow(null, ""),
  addressLine1: Joi.string().trim().required(),
  addressLine2: Joi.string().trim().allow(null, ""),
});

const updateCareProviderSchema = Joi.object({
  cpId: commonValidation.sqlGuId(),
  firstName: Joi.string().trim(),
  lastName: Joi.string().trim().allow("", null),
  prefix: Joi.string().trim().allow("", null),
  email: Joi.string().trim().email().allow("", null),
  addressLine1: Joi.string().trim().allow("", null),
  addressLine2: Joi.string().trim().allow("", null),
  addressLine3: Joi.string().trim().allow("", null),
  dob: Joi.string().allow("", null),
  bloodGroup: Joi.string().trim().allow("", null),
  gender: Joi.number().valid(1, 2).allow("", null),
  alternativeName: Joi.string().trim().allow("", null),
  alternativeNumber: commonValidation.mobileNumber(false),
  headline: Joi.string().trim().allow("", null),
  shortDescription: Joi.string().trim().allow("", null),
  bio: Joi.string().trim().allow("", null),
  fb: Joi.string().trim().uri().allow("", null),
  insta: Joi.string().trim().uri().allow("", null),
  linkedIn: Joi.string().trim().uri().allow("", null),
  youTube: Joi.string().trim().uri().allow("", null),
  x: Joi.string().trim().uri().allow("", null),
  quora: Joi.string().trim().uri().allow("", null),
  website: Joi.string()
    .pattern(/^(?!:\/\/)([a-zA-Z0-9-_]+\.)+[a-zA-Z]{2,}(:[0-9]{1,5})?(\/.*)?$/)
    .messages({
      "string.pattern.base": "Invalid URL format. Please provide a valid URL.",
    })
    .allow("", null),
  googleScholar: Joi.string().trim().uri().allow("", null),
  localityId: commonValidation.sqlGuId(false).allow("", null),
  cpTypeId: commonValidation.sqlGuId(false).allow("", null),
  status: Joi.number().valid(1, 2),
  createBy: commonValidation.sqlGuId(false),
});

module.exports = {
  updateCareProviderSchema,
  basicDetailsSchema,
  contactSchema,
  addressSchema,
};
