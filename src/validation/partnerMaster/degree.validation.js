const Joi = require("joi");
const commonValidation = require("../common.validation");

const createDegreeSchema = Joi.object({
  degreeName: Joi.string().trim().required(),
  cpTypeIds: Joi.array().items(commonValidation.sqlGuId(false)),
  isPrimary: Joi.number().valid(1, 2),
  status: Joi.number().valid(1, 2),
});

const updateDegreeSchema = createDegreeSchema.keys({
  degreeId: Joi.string()
    .trim()
    .guid({ version: ["uuidv4", "uuidv5"] })
    .required(),
});

module.exports = { createDegreeSchema, updateDegreeSchema };
