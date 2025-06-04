const Joi = require("joi");

const createBlockSchema = Joi.object({
  blockName: Joi.string().trim().required(),
  districtId: Joi.string()
    .trim()
    .guid({ version: ["uuidv4", "uuidv5"] })
    .required(),
  status: Joi.number().valid(1, 2),
});

const updateBlockSchema = createBlockSchema.keys({
  blockId: Joi.string()
    .trim()
    .guid({ version: ["uuidv4", "uuidv5"] })
    .required(),
});

module.exports = { createBlockSchema, updateBlockSchema };
