const Joi = require("joi");
const commonValidation = require("../common.validation");

const cptPtSchema = Joi.object({
  cpTypeId: Joi.string().trim().required(),
  practiceTypeIds: Joi.array().items(commonValidation.sqlGuId(false)),
});

module.exports = { cptPtSchema };
