'use strict';

var _mysql = require('mysql');

var _mysql2 = _interopRequireDefault(_mysql);

var _mariaDBConfig = require('./mariaDBConfig');

var _mariaDBConfig2 = _interopRequireDefault(_mariaDBConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pool = _mysql2.default.createPool(_mariaDBConfig2.default);

function getConnection(callback) {
  pool.getConnection(function (err, conn) {
    if (err) {
      switch (err.code) {
        case "PROTOCOL_CONNECTION_LOST":
          console.error("데이터베이스 연결 실패.");
          break;
        case "ER_CON_COUNT_ERROR":
          console.error("데이터베이스 접속 초과");
          break;
        case "ECONNREFUSED":
          console.error("데이터베이스 연결 거부");
          break;
      }
    }

    if (!err) {
      console.log('connect!');
      callback(err, conn);
    }
  });
}

module.exports = getConnection;
//# sourceMappingURL=mariaDB.js.map