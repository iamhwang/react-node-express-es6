import express from 'express';
import getConnection from '../../../database/connection/mariaDB';
import apiResponse from '../../common/util/apiResponse';

import { sqlMemosGet } from '../sql/memoSql';

const router = express.Router();

export function apiMemosGet({ req, res }) {
  var _no = req.body.no;
 
  getConnection((err, conn) => {
    conn.query(sqlMemosGet, [_no], (err, rows) => {
      if (err) {
        console.error(err);  
        throw err;
      }

      if (!err) {
        const data = apiResponse({
          statusCode: 109,
          data: rows,
        });

        return res.send(data);
      }
    });

    conn.release();
  });
};
