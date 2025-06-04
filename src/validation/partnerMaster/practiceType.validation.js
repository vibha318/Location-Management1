const Joi = require("joi");

const createPracticeTypeSchema = Joi.object({
  ptTypeName: Joi.string().trim().required(),
  slug: Joi.string().trim().required(),
  listingPageH1: Joi.string().trim(),
  listingPageP: Joi.string().trim(),
  metaTitle: Joi.string().trim().required(),
  metaDesc: Joi.string().trim().required(),
  sequence: Joi.number(),
  status: Joi.number().valid(1, 2),
});

const updatePracticeTypeSchema = createPracticeTypeSchema.keys({
  ptTypeId: Joi.string()
    .trim()
    .guid({ version: ["uuidv4", "uuidv5"] })
    .required(),
});

module.exports = { createPracticeTypeSchema, updatePracticeTypeSchema };
