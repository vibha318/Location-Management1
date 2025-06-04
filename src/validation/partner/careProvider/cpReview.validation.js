const Joi = require("joi");
const commonValidation = require("../../common.validation");

const createCpReviewSchema = Joi.object({
  review: Joi.string().trim(),
  recommendationStatus: Joi.number().valid(1, 2),
  cpId: commonValidation.sqlGuId().required(),
  userId: commonValidation.sqlGuId().required(),
  status: Joi.number().valid(1, 2),
});

const updateCpReviewSchema = Joi.object({
  cpReviewId: commonValidation.sqlGuId(),
  cpReplay: Joi.string().trim().required(),
});

module.exports = { createCpReviewSchema, updateCpReviewSchema };
