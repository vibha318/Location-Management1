class ApiResponse {
  constructor(resData, message, statusCode) {
    statusCode = statusCode || resData.recordsets?.[0][0]?.status || 200;
    this.success = statusCode < 400;
    this.status = statusCode;
    this.message = message || resData.recordsets?.[0][0]?.message || "Success";
    this.data = resData?.recordsets?.[1] || resData;
  }
}
class ApiResponseSingle {
  constructor(resData, message, statusCode, extra = {}) {
    statusCode = statusCode || resData.recordsets?.[0][0]?.status || 200;
    this.success = statusCode < 400;
    this.status = statusCode;
    this.message = message || resData.recordsets?.[0][0]?.message || "Success";
    this.data = { ...(resData.recordsets?.[1]?.[0] || {}), ...extra };
  }
}

class ApiPaggingResponse {
  constructor(resData, message, statusCode) {
    statusCode = statusCode || resData.recordsets?.[0][0]?.status || 200;
    this.success = statusCode < 400;
    this.status = statusCode;
    this.message = message || resData.recordsets?.[0][0]?.message || "Success";
    this.currentPage = resData.recordsets[0][0].currentPage;
    this.totalCount = resData.recordsets[0][0].totalCount;
    this.hasMore = resData.recordsets[0][0].hasMore;
    this.pageSize = resData.recordsets[0][0].pageSize;
    this.totalPage = resData.recordsets[0][0].totalPage;
    this.sortBy = resData.recordsets[0][0].sortBy;
    this.sortOrder = resData.recordsets[0][0].sortOrder;
    this.data = resData.recordsets?.[1];
  }
}

module.exports = { ApiResponse, ApiResponseSingle, ApiPaggingResponse };
