import express from 'express';

import apiUserLogin from './userLogin/apiUserLogin'
const router = express.Router();

router.post('/userLogin', function(req, res) {
  apiUserLogin({req, res});
});

router.post('/hello', function(req, res) {
  console.log(1);
});

module.exports = router;
