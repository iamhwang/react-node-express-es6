'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mariaDB = require('../../../database/connection/mariaDB');

var _mariaDB2 = _interopRequireDefault(_mariaDB);

var _sql_userLogin = require('./sql_userLogin');

var _ftn_userLogin = require('./ftn_userLogin');

var _ftn_userLogin2 = _interopRequireDefault(_ftn_userLogin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

exports.default = router.post('/userLogin', function (req, res) {
  console.log('start');
  var _username = req.body.username;
  var _password = '1'; //req.body.password;

  (0, _mariaDB2.default)(function (err, conn) {
    conn.query(_sql_userLogin.sql_userLogin, [_username, _password], function (err, rows) {
      if (err) {
        console.error(err);
        throw err;
      }

      if (!err) {
        console.log('data');
        console.log(rows);
        var data = (0, _ftn_userLogin2.default)({ rows: rows });
        return res.send(data);
      }
    });

    conn.release();
  });
});
//# sourceMappingURL=api_userLogin.js.map