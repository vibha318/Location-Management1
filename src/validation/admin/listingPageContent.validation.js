const Joi = require("joi");
const commonValidation = require("../common.validation");

const listingPageFaqCreateSchema = Joi.object({
  typeId: commonValidation.sqlGuId(),
  question: Joi.string().required(),
  answer: Joi.string().required(),
  sequence: Joi.number().required(),
});
const listingPageFaqUpdateSchema = listingPageFaqCreateSchema.keys({
  lfaqId: commonValidation.sqlGuId(),
});
const listingPageContentSchema = {
  listingPageFaqCreateSchema,
  listingPageFaqUpdateSchema,
};
module.exports = listingPageContentSchema;
