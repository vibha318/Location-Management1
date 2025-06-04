const Joi = require("joi");
const commonValidation = require("../common.validation");

const adCreateSchema = Joi.object({
  imageType: Joi.string().equal("6000"),
  adName: Joi.string().trim().required(),
  entId: commonValidation.sqlGuId(),
  redirectUrl: Joi.string().uri().required(),
  adType: Joi.string().valid("sidebar", "bottom_banner", "popup"),
  startDateTime: Joi.string(),
  endDateTime: Joi.string(),
  status: Joi.allow(1, 2, 0),
  totalBudget: Joi.number(),
  cities: Joi.string().allow(null, ""),
  position: Joi.string(),
  blogSubCategory: Joi.string().allow(null, ""),
});

const adsSchema = { adCreateSchema };
module.exports = adsSchema;
