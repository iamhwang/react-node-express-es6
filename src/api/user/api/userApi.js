import express from 'express';
import getConnection from '../../../database/connection/mariaDB';

import { sqlUserLogin } from '../sql/uesrSql';
import { ftnUserLogin } from '../function/userFunction';

const router = express.Router();

export function apiUserLogin({ req, res }) {
  var _username = req.body.username;
  var _password = '1';//req.body.password;
 
  getConnection((err, conn) => {
    conn.query(sqlUserLogin, [_username, _password], (err, rows) => {
      if (err) {
        console.error(err);  
        throw err;
      }

      if (!err) {
        console.log(rows);
        const data = ftnUserLogin({ rows });
        return res.send(data);
      }
    });

    conn.release();
  });
};
