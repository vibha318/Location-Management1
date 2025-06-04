const ApiError = require("./ApiError.utils");

const checkSuccess = (resData) => {
  const resSumm = resData.recordsets[0][0];
  if (resSumm.status >= 400) {
    throw new ApiError(resSumm.status, resSumm.message);
  }
};

module.exports = checkSuccess;
