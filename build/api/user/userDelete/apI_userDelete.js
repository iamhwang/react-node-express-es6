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

var _sql_userDelete = require('./sql_userDelete');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

exports.default = router.post('/userDelete', function (req, res) {
  var _username = req.body.id;
  console.log(_username);

  (0, _mariaDB2.default)(function (err, conn) {
    conn.query(_sql_userDelete.userDelete, [_username], function (err) {
      if (err) {
        console.error(err);
        throw err;
      }

      if (!err) {
        var data = (0, _apiResponse2.default)({
          statusCode: 101,
          message: '회원정보가 삭제됐습니다.'
        });
        return res.send(data);
      }
    });

    conn.release();
  });
});
//# sourceMappingURL=apI_userDelete.js.map