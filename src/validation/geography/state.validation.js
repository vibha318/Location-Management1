const Joi = require("joi");

const createStateSchema = Joi.object({
  stateName: Joi.string().trim().required(),
  countryId: Joi.string()
    .trim()
    .guid({ version: ["uuidv4", "uuidv5"] })
    .required(),
  status: Joi.number().valid(1, 2),
});

const updateStateSchema = createStateSchema.keys({
  stateId: Joi.string()
    .trim()
    .guid({ version: ["uuidv4", "uuidv5"] })
    .required(),
});

module.exports = { createStateSchema, updateStateSchema };
