const Joi = require("joi");
const commonValidation = require("../common.validation");

const userAuthOtpSchema = Joi.object({
  mobileNumber: commonValidation.mobileNumber(),
});

const userAuthVerifySchema = userAuthOtpSchema.keys({
  otp: Joi.string().trim().length(6).required(),
});

const userAuthValidation = { userAuthOtpSchema, userAuthVerifySchema };
module.exports = userAuthValidation;
