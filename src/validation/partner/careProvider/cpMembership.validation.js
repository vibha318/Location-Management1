const Joi = require("joi");
const commonValidation = require("../../common.validation");

const createCpMembershipSchema = Joi.object({
  cpId: Joi.string()
    .trim()
    .guid({ version: ["uuidv4", "uuidv5"] })
    .required(),
  membershipName: Joi.string().trim().required(),
  description: Joi.string().trim().required(),
  duration: Joi.number().valid(1, 2),
  price: Joi.number(),
  isDiscount: Joi.number().valid(1, 2),
  offerLabel: Joi.number().valid(1, 2),
  discountByPercentage: Joi.number(),
  discountByPrice: Joi.number(),
  finalPrice: Joi.number().allow(null, ""),
  serviceIds: Joi.array().items(commonValidation.sqlGuId(false)),
  status: Joi.number().valid(1, 2),
});

const updateCpMembershipSchema = createCpMembershipSchema.keys({
  cpMembershipId: Joi.string()
    .trim()
    .guid({ version: ["uuidv4", "uuidv5"] })
    .required(),
});

module.exports = { createCpMembershipSchema, updateCpMembershipSchema };
