const Joi = require("joi");

const createCitySchema = Joi.object({
  cityName: Joi.string().trim().required(),
  slug: Joi.string().trim().required(),
  blockId: Joi.string()
    .trim()
    .guid({ version: ["uuidv4", "uuidv5"] })
    .required(),
  status: Joi.number().valid(1, 2),
});

const updateCitySchema = createCitySchema.keys({
  cityId: Joi.string()
    .trim()
    .guid({ version: ["uuidv4", "uuidv5"] })
    .required(),
});

module.exports = { createCitySchema, updateCitySchema };
