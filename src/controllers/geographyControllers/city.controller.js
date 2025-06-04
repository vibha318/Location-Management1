const cityDa = require("../../dataAccess/geography/city.da");
const {
  ApiResponseSingle,
  ApiResponse,
} = require("../../utils/ApiResponse.utils");
const asyncHandler = require("../../utils/asyncHandler.utils");
const checkSuccess = require("../../utils/checkSuccess.utils");
const HTTP_STATUS = require("../../utils/statusCode.utils");

const getCity = asyncHandler(async (req, res) => {
  const resData = await cityDa.getCity(req);
  return res.status(HTTP_STATUS.OK).json(new ApiResponse(resData));
});
const deleteCity = asyncHandler(async (req, res) => {
  const resData = await cityDa.deleteCity(req);
  return res.status(HTTP_STATUS.OK).json(new ApiResponseSingle(resData));
});
const InsertCity = asyncHandler(async (req, res) => {
  const resData = await cityDa.InsertCity(req);
  checkSuccess(resData);
  return res.status(HTTP_STATUS.CREATED).json(new ApiResponseSingle(resData));
});
const updateCity = asyncHandler(async (req, res) => {
  const resData = await cityDa.updateCity(req);
  checkSuccess(resData);
  return res.status(HTTP_STATUS.OK).json(new ApiResponseSingle(resData));
});

const cityController = {
  getCity,
  deleteCity,
  InsertCity,
  updateCity,
};
module.exports = cityController;
