const Joi = require("joi");

const createInsuranceCompanySchema = Joi.object({
  insuranceCompanyName: Joi.string().trim().required(),
  insuranceCompanyBio: Joi.string().trim().required(),
  insuranceCompanyWebsite: Joi.string().trim().required(),
  status: Joi.number().valid(1, 2),
});

const updateInsuranceCompanySchema = createInsuranceCompanySchema.keys({
  insuranceCompanyId: Joi.string()
    .trim()
    .guid({ version: ["uuidv4", "uuidv5"] })
    .required(),
});

module.exports = { createInsuranceCompanySchema, updateInsuranceCompanySchema };
