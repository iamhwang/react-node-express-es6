import maria from 'mysql';
import mariaConfig from './mariaDBConfig';

const pool = maria.createPool(mariaConfig);

function getConnection(callback) {
  pool.getConnection(function (err, conn) {
    if(err) {
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

    if(!err) {
      console.log('connect!');
      callback(err, conn);
    }
  });
}

module.exports = getConnection;
