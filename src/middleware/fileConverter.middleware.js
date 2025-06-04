const sharp = require("sharp");
const fs = require("fs");
const path = require("path");
const { logError } = require("../utils/logger.utils");
const HTTP_STATUS = require("../utils/statusCode.utils");
const ApiError = require("../utils/ApiError.utils");

const convertToWebp = async (req, res, next) => {
  // Check if there are files in req.files, which could be a single file or multiple
  if (
    !req.file &&
    typeof req.files === "object" &&
    Object.keys(req.files).length === 0
  ) {
    return next();
  }

  const files = req.file
    ? [req.file]
    : typeof req.files === "object" && Object.keys(req.files).length > 0
      ? Object.values(req.files).flat()
      : [];

  const fileProcessingPromises = files.map(async (file) => {
    const { path: filePath, filename } = file;

    const fileExtension = path.extname(filename).toLowerCase();
    // Check if the uploaded file is already a WebP file
    if (fileExtension === ".webp") {
      return; // Skip conversion if already a WebP file
    }

    const newFileName = `${path.parse(filename).name}.webp`;
    const newFilePath = path.join(path.dirname(filePath), newFileName);

    try {
      // Convert the image to WebP format with sharp
      await sharp(filePath).rotate().webp({ quality: 80 }).toFile(newFilePath);

      // Clear sharp cache (important to avoid "EPERM" errors)
      sharp.cache(false);

      // Delete the original file after conversion
      fs.unlinkSync(filePath);

      // Update the file object with the new WebP file details
      file.filename = newFileName;
      file.path = newFilePath;
    } catch (error) {
      logError(error);
      throw new ApiError(error);
    }
  });

  try {
    // Wait for all file processing to finish
    await Promise.all(fileProcessingPromises);
    return next();
  } catch (error) {
    return res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).json({
      success: false,
      status: HTTP_STATUS.INTERNAL_SERVER_ERROR,
      message: "Error processing files: " + error.message,
    });
  }
};

module.exports = convertToWebp;
