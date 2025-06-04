const Joi = require("joi");
const commonValidation = require("../common.validation");

const createFamilyMemberSchema = Joi.object({
  userId: commonValidation.sqlGuId(),
  firstName: Joi.string().trim(),
  lastName: Joi.string().trim(),
  mobileNumber: commonValidation.mobileNumber(),
  email: Joi.string().trim().email().required(),
  dob: Joi.string().trim().required(),
  bloodGroup: Joi.string().trim(),
  gender: Joi.number().valid(1, 2),
  relation: Joi.string().trim(),
  status: Joi.number().valid(1, 2),
});

const updateFamilyMemberSchema = Joi.object({
  fmUserId: Joi.string()
    .trim()
    .guid({ version: ["uuidv4", "uuidv5"] })
    .required(),
  firstName: Joi.string().trim(),
  lastName: Joi.string().trim(),
  mobileNumber: commonValidation.mobileNumber(),
  email: Joi.string().trim().email().required(),
  dob: Joi.string().trim().required(),
  bloodGroup: Joi.string().trim(),
  gender: Joi.number().valid(1, 2),
  relation: Joi.string().trim(),
  status: Joi.number().valid(1, 2),
});

module.exports = { createFamilyMemberSchema, updateFamilyMemberSchema };
