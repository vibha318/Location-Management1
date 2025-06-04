const Joi = require("joi");

const createMedicineCompanySchema = Joi.object({
  medicineName: Joi.string().trim().required(),
  dosage: Joi.string().trim().required(),
  genericName: Joi.string().trim(),
  userId: Joi.string()
    .trim()
    .guid({ version: ["uuidv4", "uuidv5"] }),
  status: Joi.number().valid(1, 2),
});

const updateMedicineCompanySchema = createMedicineCompanySchema.keys({
  medicineId: Joi.string()
    .trim()
    .guid({ version: ["uuidv4", "uuidv5"] })
    .required(),
});

module.exports = { createMedicineCompanySchema, updateMedicineCompanySchema };
