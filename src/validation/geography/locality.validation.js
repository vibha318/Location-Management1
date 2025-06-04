const Joi = require("joi");

const createlocalitySchema = Joi.object({
  localityName: Joi.string().trim().required(),
  cityId: Joi.string()
    .trim()
    .guid({ version: ["uuidv4", "uuidv5"] })
    .required(),
  status: Joi.number().valid(1, 2),
});

const updateLocalitySchema = createlocalitySchema.keys({
  localityId: Joi.string()
    .trim()
    .guid({ version: ["uuidv4", "uuidv5"] })
    .required(),
});

module.exports = { createlocalitySchema, updateLocalitySchema };
