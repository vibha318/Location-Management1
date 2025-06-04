const { logError } = require("./logger.utils");
const fs = require("fs");

const HTTP_STATUS = require("../utils/statusCode.utils");

// asyncHandler is a higher order function to wrap try catch part of all functions
const asyncHandler = (func) => async (req, res, next) => {
  try {
    const data = await func(req, res, next);
    return data;
  } catch (error) {
    logError(error);
    // removing uploaded file if any error occurred
    if (req.file) {
      if (req.file.path) {
        fs.unlink(req.file.path, () => {});
      }
    }
    if (req.files) {
      Object.keys(req.files)?.map((flKey) => {
        if (req.files?.[flKey]?.[0]?.path) {
          fs.unlink(req.files[flKey][0].path, () => {});
        }
      });
    }
    return res
      .status(error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR)
      .json({
        success: false,
        status: error.statusCode || HTTP_STATUS.INTERNAL_SERVER_ERROR,
        message: error.message,
      });
  }
};

module.exports = asyncHandler;
