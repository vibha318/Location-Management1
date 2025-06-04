const countryDa = require("../../dataAccess/geography/country.da");
const {
  ApiResponseSingle,
  ApiResponse,
} = require("../../utils/ApiResponse.utils");
const asyncHandler = require("../../utils/asyncHandler.utils");
const checkSuccess = require("../../utils/checkSuccess.utils");
const HTTP_STATUS = require("../../utils/statusCode.utils");

const getCountry = asyncHandler(async (req, res) => {
  const resData = await countryDa.getCountry(req);
  return res.status(HTTP_STATUS.OK).json(new ApiResponse(resData));
});
const deleteCountry = asyncHandler(async (req, res) => {
  const resData = await countryDa.deleteCountry(req);
  return res.status(HTTP_STATUS.OK).json(new ApiResponseSingle(resData));
});
const InsertCountry = asyncHandler(async (req, res) => {
  const resData = await countryDa.InsertCountry(req);
  checkSuccess(resData);
  return res.status(HTTP_STATUS.CREATED).json(new ApiResponseSingle(resData));
});
const updateCountry = asyncHandler(async (req, res) => {
  const resData = await countryDa.updateCountry(req);
  checkSuccess(resData);
  return res.status(HTTP_STATUS.OK).json(new ApiResponseSingle(resData));
});

const countryController = {
  getCountry,
  deleteCountry,
  InsertCountry,
  updateCountry,
};
module.exports = countryController;
