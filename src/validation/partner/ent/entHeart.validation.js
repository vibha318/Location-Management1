const Joi = require("joi");
const commonValidation = require("../../common.validation");

const entHeartGetSchema = Joi.object({ entId: commonValidation.sqlGuId() });

const entHeartSchema = { entHeartGetSchema };
module.exports = entHeartSchema;
