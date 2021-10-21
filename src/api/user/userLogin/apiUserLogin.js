import express from 'express';
import getConnection from '../../../database/connection/mariaDB';

import { sql_userLogin } from './sqlUserLogin';
import ftn_userLogin from './ftnUserLogin';

const router = express.Router();

export default function apiUserLogin({ req, res }) {
  var _username = req.body.username;
  var _password = '1';//req.body.password;
 
  getConnection((err, conn) => {
    conn.query(sql_userLogin, [_username, _password], (err, rows) => {
      if (err) {
        console.error(err);  
        throw err;
      }

      if (!err) {
        console.log(rows);
        const data = ftn_userLogin({ rows });
        return res.send(data);
      }
    });

    conn.release();
  });
};
