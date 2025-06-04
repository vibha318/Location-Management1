const Joi = require("joi");

const createInsuranceProductSchema = Joi.object({
  productName: Joi.string().trim().required(),
  productDescription: Joi.string().trim().allow("", null),
  coverageAmount: Joi.number(),
  coverageAdultCount: Joi.number().allow("", null),
  coverageChildCount: Joi.number().allow("", null),
  premium: Joi.number(),
  discountByPercentage: Joi.number(),
  discountByPrice: Joi.number(),
  discPremium: Joi.number(),
  offerLabel: Joi.number().valid(1, 2),
  isDiscount: Joi.number().valid(1, 2),
  cpId: Joi.string()
    .trim()
    .guid({ version: ["uuidv4", "uuidv5"] })
    .required(),
  insuranceCompanyId: Joi.string()
    .trim()
    .guid({ version: ["uuidv4", "uuidv5"] })
    .required(),
  status: Joi.number().valid(1, 2),
});

const updateInsuranceProductSchema = createInsuranceProductSchema.keys({
  insuranceProductId: Joi.string()
    .trim()
    .guid({ version: ["uuidv4", "uuidv5"] })
    .required(),
});

module.exports = { createInsuranceProductSchema, updateInsuranceProductSchema };
