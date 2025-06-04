const Joi = require("joi");
const commonValidation = require("../common.validation");

const ptrCpSendOtpSchema = Joi.object({
  cpTypeId: commonValidation.sqlGuId(),
  mobileNumber: commonValidation.mobileNumber(),
});

const ptrCpVerifyOtpSchema = ptrCpSendOtpSchema.keys({
  otp: Joi.string().trim().length(6),
});

const ptrEntSendOtpSchema = Joi.object({
  email: Joi.string().trim().email().required(),
});

const ptrEntVerifyOtpSchema = ptrEntSendOtpSchema.keys({
  otp: Joi.string().trim().length(6),
});

const ptrAuthValidation = {
  ptrCpSendOtpSchema,
  ptrCpVerifyOtpSchema,
  ptrEntSendOtpSchema,
  ptrEntVerifyOtpSchema,
};
module.exports = ptrAuthValidation;
