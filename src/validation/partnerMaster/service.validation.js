const Joi = require("joi");
const commonValidation = require("../common.validation");

const createServiceSchema = Joi.object({
  serviceName: Joi.string().trim().required(),
  cpTypeIds: Joi.array().items(commonValidation.sqlGuId(false)),
  status: Joi.number().valid(1, 2),
});

const updateServiceSchema = createServiceSchema.keys({
  serviceId: Joi.string()
    .trim()
    .guid({ version: ["uuidv4", "uuidv5"] })
    .required(),
});

module.exports = { createServiceSchema, updateServiceSchema };
