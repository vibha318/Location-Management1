const Joi = require("joi");

const createCountrySchema = Joi.object({
  countryName: Joi.string().trim().required(),
  status: Joi.number().valid(1, 2),
});

const updateCountrySchema = createCountrySchema.keys({
  countryId: Joi.string()
    .trim()
    .guid({ version: ["uuidv4", "uuidv5"] })
    .required(),
});

module.exports = { createCountrySchema, updateCountrySchema };
