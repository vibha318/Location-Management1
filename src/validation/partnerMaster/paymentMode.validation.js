const Joi = require("joi");

const createPaymentModeSchema = Joi.object({
  paymentModeName: Joi.string().trim().required(),
  status: Joi.number().valid(1, 2),
});

const updatePaymentModeSchema = createPaymentModeSchema.keys({
  paymentModeId: Joi.string()
    .trim()
    .guid({ version: ["uuidv4", "uuidv5"] })
    .required(),
});

module.exports = { createPaymentModeSchema, updatePaymentModeSchema };
