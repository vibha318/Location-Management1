const ApiError = require("../utils/ApiError.utils");
const asyncHandler = require("../utils/asyncHandler.utils");

const authorizeRole = (...roles) =>
  asyncHandler((req, res, next) => {
    const authorized = roles.includes(req.user.role);
    if (!authorized) {
      throw new ApiError(401, "Unauthorized access");
    }
    next();
  });

module.exports = authorizeRole;
