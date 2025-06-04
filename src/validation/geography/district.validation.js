const Joi = require("joi");

const createDistrictSchema = Joi.object({
  districtName: Joi.string().trim().required(),
  stateId: Joi.string()
    .trim()
    .guid({ version: ["uuidv4", "uuidv5"] })
    .required(),
  status: Joi.number().valid(1, 2),
});

const updateDistrictSchema = createDistrictSchema.keys({
  districtId: Joi.string()
    .trim()
    .guid({ version: ["uuidv4", "uuidv5"] })
    .required(),
});

module.exports = { createDistrictSchema, updateDistrictSchema };
