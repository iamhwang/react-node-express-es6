import express from 'express';
import getConnection from '../../../database/connection/mariaDB';

import { sql_userLogin } from './sql_userLogin';
import ftn_userLogin from './ftn_userLogin';

const router = express.Router();

export default router.post('/userLogin', function(req, res) {
  console.log('start');
  var _username = req.body.username;
  var _password = '1';//req.body.password;
 
  getConnection((err, conn) => {
    conn.query(sql_userLogin, [_username, _password], (err, rows) => {
      if (err) {
        console.error(err);  
        throw err;
      }

      if (!err) {
        console.log('data');
        console.log(rows);
        const data = ftn_userLogin({ rows });
        return res.send(data);
      }
    });

    conn.release();
  });
});
