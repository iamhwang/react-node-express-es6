'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = apiUserLogin;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mariaDB = require('../../../database/connection/mariaDB');

var _mariaDB2 = _interopRequireDefault(_mariaDB);

var _sqlUserLogin = require('./sqlUserLogin');

var _ftnUserLogin = require('./ftnUserLogin');

var _ftnUserLogin2 = _interopRequireDefault(_ftnUserLogin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

function apiUserLogin(_ref) {
  var req = _ref.req,
      res = _ref.res;

  var _username = req.body.username;
  var _password = '1'; //req.body.password;

  (0, _mariaDB2.default)(function (err, conn) {
    conn.query(_sqlUserLogin.sql_userLogin, [_username, _password], function (err, rows) {
      if (err) {
        console.error(err);
        throw err;
      }

      if (!err) {
        console.log(rows);
        var data = (0, _ftnUserLogin2.default)({ rows: rows });
        return res.send(data);
      }
    });

    conn.release();
  });
};
//# sourceMappingURL=apiUserLogin.js.map