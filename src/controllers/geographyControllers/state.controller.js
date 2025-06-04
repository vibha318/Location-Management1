const stateDa = require("../../dataAccess/geography/state.da");
const {
  ApiResponseSingle,
  ApiResponse,
} = require("../../utils/ApiResponse.utils");
const asyncHandler = require("../../utils/asyncHandler.utils");
const checkSuccess = require("../../utils/checkSuccess.utils");
const HTTP_STATUS = require("../../utils/statusCode.utils");

const getState = asyncHandler(async (req, res) => {
  const resData = await stateDa.getState(req);
  return res.status(HTTP_STATUS.OK).json(new ApiResponse(resData));
});
const deleteState = asyncHandler(async (req, res) => {
  const resData = await stateDa.deleteState(req);
  return res.status(HTTP_STATUS.OK).json(new ApiResponseSingle(resData));
});
const InsertState = asyncHandler(async (req, res) => {
  const resData = await stateDa.InsertState(req);
  checkSuccess(resData);
  return res.status(HTTP_STATUS.CREATED).json(new ApiResponseSingle(resData));
});
const updateState = asyncHandler(async (req, res) => {
  const resData = await stateDa.updateState(req);
  checkSuccess(resData);
  return res.status(HTTP_STATUS.OK).json(new ApiResponseSingle(resData));
});

const stateController = {
  getState,
  deleteState,
  InsertState,
  updateState,
};
module.exports = stateController;
