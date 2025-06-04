require("dotenv").config();

const jwt = require("jsonwebtoken");

const ApiError = require("../utils/ApiError.utils");
const asyncHandler = require("../utils/asyncHandler.utils");

const authentication = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader?.split(" ")?.[1];

  if (!token) {
    throw new ApiError(401, "Token is required");
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
  } catch (error) {
    throw new ApiError(401, "Invalid jwt token", error);
  }
  next();
});

module.exports = authentication;
