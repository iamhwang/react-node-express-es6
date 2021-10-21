"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = apiResponse;
function apiResponse(_ref) {
  var statusCode = _ref.statusCode,
      message = _ref.message,
      data = _ref.data;

  if (statusCode === 100) {
    var response = {
      status: true,
      statusCode: statusCode,
      data: data
    };
    return response;
  }

  if (statusCode === 101) {
    var _response = {
      status: true,
      statusCode: statusCode,
      message: message
    };
    return _response;
  }

  if (statusCode === 109) {
    var _response2 = {
      status: true,
      statusCode: statusCode,
      data: data
    };
    return _response2;
  }

  if (statusCode === 110) {
    var _response3 = {
      status: true,
      statusCode: statusCode,
      message: message,
      data: data
    };
    return _response3;
  }

  if (statusCode === 400) {
    var _response4 = {
      status: false,
      statusCode: statusCode,
      message: message
    };
    return _response4;
  }
}
//# sourceMappingURL=apiResponse.js.map