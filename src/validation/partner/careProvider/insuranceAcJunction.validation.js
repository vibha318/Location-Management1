const Joi = require("joi");

const createInsuranceAcJunctionSchema = Joi.object({
  cpId: Joi.string()
    .trim()
    .guid({ version: ["uuidv4", "uuidv5"] })
    .required(),
  insuranceCompanyId: Joi.string()
    .trim()
    .guid({ version: ["uuidv4", "uuidv5"] })
    .required(),
  status: Joi.number().valid(1, 2),
});

const updateInsuranceAcJunctionSchema = createInsuranceAcJunctionSchema.keys({
  iacId: Joi.string()
    .trim()
    .guid({ version: ["uuidv4", "uuidv5"] })
    .required(),
});

module.exports = {
  createInsuranceAcJunctionSchema,
  updateInsuranceAcJunctionSchema,
};
