const Joi = require("joi");
const commonValidation = require("./common.validation");

const rzpCreateOrderSchema = Joi.object({
  amount: Joi.number().required(),
  refId: commonValidation.sqlGuId(),
  type: Joi.string().valid("heart_recharge").required(),
});

const rzpSchema = { rzpCreateOrderSchema };
module.exports = rzpSchema;
