'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiMemosGet = apiMemosGet;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mariaDB = require('../../../database/connection/mariaDB');

var _mariaDB2 = _interopRequireDefault(_mariaDB);

var _apiResponse = require('../../common/util/apiResponse');

var _apiResponse2 = _interopRequireDefault(_apiResponse);

var _memoSql = require('../sql/memoSql');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

function apiMemosGet(_ref) {
  var req = _ref.req,
      res = _ref.res;

  var _no = req.body.no;

  (0, _mariaDB2.default)(function (err, conn) {
    conn.query(_memoSql.sqlMemosGet, [_no], function (err, rows) {
      if (err) {
        console.error(err);
        throw err;
      }

      if (!err) {
        var data = (0, _apiResponse2.default)({
          statusCode: 109,
          data: rows
        });

        return res.send(data);
      }
    });

    conn.release();
  });
};
//# sourceMappingURL=memoApi.js.map