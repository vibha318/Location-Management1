const Joi = require("joi");

const createAdminUserSchema = Joi.object({
  firstName: Joi.string().trim().min(3).max(30).required(),
  lastName: Joi.string().trim().min(3).max(30).required(),
  mobileNumber: Joi.string()
    .pattern(/^\+?[1-9]\d{1,14}$/)
    .required(),
  email: Joi.string().trim().email().required(),
  password: Joi.string()
    .trim()
    .min(8)
    .pattern(
      new RegExp(
        "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{8,}$",
      ),
    )
    .required()
    .messages({
      "string.pattern.base":
        "Password must have at least one uppercase letter, one lowercase letter, one number, and one special character",
    }),
  status: Joi.number().valid(1, 2),
});

const updateAdminUserSchema = createAdminUserSchema.keys({
  adminUserId: Joi.string()
    .trim()
    .guid({ version: ["uuidv4", "uuidv5"] })
    .required(),
});

module.exports = { createAdminUserSchema, updateAdminUserSchema };
