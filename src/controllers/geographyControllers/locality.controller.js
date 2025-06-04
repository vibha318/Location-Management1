const localityDa = require("../../dataAccess/geography/locality.da");
const {
  ApiResponseSingle,
  ApiResponse,
} = require("../../utils/ApiResponse.utils");
const asyncHandler = require("../../utils/asyncHandler.utils");
const checkSuccess = require("../../utils/checkSuccess.utils");
const HTTP_STATUS = require("../../utils/statusCode.utils");

const getLocality = asyncHandler(async (req, res) => {
  const resData = await localityDa.getLocality(req);
  return res.status(HTTP_STATUS.OK).json(new ApiResponse(resData));
});
const deleteLocality = asyncHandler(async (req, res) => {
  const resData = await localityDa.deleteLocality(req);
  return res.status(HTTP_STATUS.OK).json(new ApiResponseSingle(resData));
});
const InsertLocality = asyncHandler(async (req, res) => {
  const resData = await localityDa.InsertLocality(req);
  checkSuccess(resData);
  return res.status(HTTP_STATUS.CREATED).json(new ApiResponseSingle(resData));
});
const updateLocality = asyncHandler(async (req, res) => {
  const resData = await localityDa.updateLocality(req);
  checkSuccess(resData);
  return res.status(HTTP_STATUS.OK).json(new ApiResponseSingle(resData));
});

const localityController = {
  getLocality,
  deleteLocality,
  InsertLocality,
  updateLocality,
};
module.exports = localityController;
