const Joi = require("joi");
const commonValidation = require("../../common.validation");

const createCpServiceSchema = Joi.object({
  cpId: commonValidation.sqlGuId(),
  serviceId: commonValidation.sqlGuId(),
  practiceId: commonValidation.sqlGuId(),
  serviceDescription: Joi.string().trim().allow(null, ""),
  servicePrice: Joi.number().allow("", null),
  isDiscount: Joi.number().valid(1, 2),
  discountByPercentage: Joi.number().min(0).max(100).allow("", null),
  discountByPrice: Joi.number().allow("", null),
  finalPrice: Joi.number().allow("", null),
  sequence: Joi.number().allow("", null),
  status: Joi.number().valid(1, 2),
});

const updateCpServiceSchema = createCpServiceSchema.keys({
  cpServiceId: commonValidation.sqlGuId(),
});

module.exports = { createCpServiceSchema, updateCpServiceSchema };
