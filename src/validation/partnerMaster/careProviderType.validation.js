const Joi = require("joi");

const createCareProviderTypeSchema = Joi.object({
  cpTypeName: Joi.string().trim().required(),
  cpKey: Joi.string().trim().required(),
  listingPageH1: Joi.string().trim(),
  listingPageP: Joi.string().trim(),
  metaTitle: Joi.string().trim().required(),
  metaDesc: Joi.string().trim().required(),
  sequence: Joi.number(),
  status: Joi.number().valid(1, 2),
});

const updateCareProviderTypeSchema = createCareProviderTypeSchema.keys({
  cpTypeId: Joi.string()
    .trim()
    .guid({ version: ["uuidv4", "uuidv5"] })
    .required(),
});

module.exports = { createCareProviderTypeSchema, updateCareProviderTypeSchema };
