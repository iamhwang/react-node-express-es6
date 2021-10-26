'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiUserLogin = apiUserLogin;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mariaDB = require('../../../database/connection/mariaDB');

var _mariaDB2 = _interopRequireDefault(_mariaDB);

var _uesrSql = require('../sql/uesrSql');

var _userFunction = require('../function/userFunction');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

function apiUserLogin(_ref) {
  var req = _ref.req,
      res = _ref.res;

  var _username = req.body.username;
  var _password = '1'; //req.body.password;

  (0, _mariaDB2.default)(function (err, conn) {
    conn.query(_uesrSql.sqlUserLogin, [_username, _password], function (err, rows) {
      if (err) {
        console.error(err);
        throw err;
      }

      if (!err) {
        console.log(rows);
        var data = (0, _userFunction.ftnUserLogin)({ rows: rows });
        return res.send(data);
      }
    });

    conn.release();
  });
};
//# sourceMappingURL=userApi.js.map