'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _mariaDB = require('../../../database/connection/mariaDB');

var _mariaDB2 = _interopRequireDefault(_mariaDB);

var _apiResponse = require('../../_apiResponse');

var _apiResponse2 = _interopRequireDefault(_apiResponse);

var _sql_userCreate = require('./sql_userCreate');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

exports.default = router.post('/userCreate', function (req, res) {
  var _username = req.body.id;
  var _password = req.body.password;

  (0, _mariaDB2.default)(function (err, conn) {
    conn.query(_sql_userCreate.sql_userCreate, [_username, _password], function (err) {
      if (err) {
        console.error(err);
        throw err;
      }

      if (!err) {
        var data = (0, _apiResponse2.default)({
          statusCode: 101,
          message: '환영합니다! 회원가입을 축하합니다.'
        });
        return res.send(data);
      }
    });

    conn.release();
  });
});
//# sourceMappingURL=api_userCreate.js.map