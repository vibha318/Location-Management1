const Joi = require("joi");

const createAmenitiesSchema = Joi.object({
  amenitiesName: Joi.string().trim().required(),
  status: Joi.number().valid(1, 2),
});

const updateAmenitiesSchema = createAmenitiesSchema.keys({
  amenitiesId: Joi.string()
    .trim()
    .guid({ version: ["uuidv4", "uuidv5"] })
    .required(),
});

module.exports = { createAmenitiesSchema, updateAmenitiesSchema };
