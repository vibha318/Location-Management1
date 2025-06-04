const Joi = require("joi");
const commonValidation = require("../common.validation");

const createSpecialitySchema = Joi.object({
  specialityName: Joi.string().trim().required(),
  slug: Joi.string().trim().required(),
  listingPageH1: Joi.string().trim(),
  listingPageP: Joi.string().trim(),
  metaTitle: Joi.string().trim().required(),
  metaDesc: Joi.string().trim().required(),
  cpTypeIds: Joi.array().items(commonValidation.sqlGuId(false)),
  status: Joi.number().valid(1, 2),
});

const updateSpecialitySchema = createSpecialitySchema.keys({
  specialityId: Joi.string()
    .trim()
    .guid({ version: ["uuidv4", "uuidv5"] })
    .required(),
});

module.exports = { createSpecialitySchema, updateSpecialitySchema };
