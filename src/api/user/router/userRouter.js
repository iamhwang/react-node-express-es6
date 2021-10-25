import express from 'express';

import { apiUserLogin } from '../api/userApi'

const router = express.Router();

router.post('/userLogin', function(req, res) {
  apiUserLogin({req, res});
});

router.post('/hello', function(req, res) {
  console.log(1);
});


router.post('/user/userLogin', function(req, res) {
  console.log(111111);
});


router.post('/user/router/userRouter/userLogin', function(req, res) {
  console.log(111111111);
});

module.exports = router;
