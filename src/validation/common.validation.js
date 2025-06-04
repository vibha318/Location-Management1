const Joi = require("joi");

const mobileNumber = (isRequired = true) =>
  isRequired
    ? Joi.string()
        .trim()
        .pattern(/^[6-9]\d{9}$/)
        .required()
        .messages({ "string.pattern.base": "Invalid mobile number format" })
    : Joi.string()
        .trim()
        .pattern(/^[6-9]\d{9}$/)
        .allow(null, "")
        .messages({ "string.pattern.base": "Invalid mobile number format" });

const sqlGuId = (isRequired = true) =>
  isRequired
    ? Joi.string()
        .trim()
        .guid({ version: ["uuidv4", "uuidv5"] })
        .required()
    : Joi.string()
        .trim()
        .guid({ version: ["uuidv4", "uuidv5"] });

const commonValidation = { mobileNumber, sqlGuId };
module.exports = commonValidation;
