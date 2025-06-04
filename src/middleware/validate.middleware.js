const ApiError = require("../utils/ApiError.utils");
const asyncHandler = require("../utils/asyncHandler.utils");
const HTTP_STATUS = require("../utils/statusCode.utils");

const validate = (schema) =>
  asyncHandler((req, res, next) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      throw new ApiError(
        HTTP_STATUS.BAD_REQUEST,
        error.details[0].message,
        error.details,
      );
    }
    req.body = { ...req.body, ...value };
    next();
  });

module.exports = validate;
