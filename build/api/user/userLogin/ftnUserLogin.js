'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ftn_userLogin;

var _apiResponse = require('../../common/apiResponse');

var _apiResponse2 = _interopRequireDefault(_apiResponse);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ftn_userLogin(_ref) {
  var rows = _ref.rows;

  if (rows.length === 0 || rows === '') {
    return (0, _apiResponse2.default)({
      statusCode: 400,
      message: '아이디 혹은 비밀번호가 일치하지 않습니다.'
    });
  }

  if (rows.length !== 0 || rows !== '') {
    var data = {
      id: rows[0].ID,
      no: rows[0].NO,
      accessToken: 'loginSuccessToken'
    };
    return (0, _apiResponse2.default)({
      statusCode: 109,
      data: data
    });
  }
}
//# sourceMappingURL=ftnUserLogin.js.map