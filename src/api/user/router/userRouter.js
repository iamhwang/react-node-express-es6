import express from 'express';

import { apiUserLogin } from '../api/userApi'

const router = express.Router();

router.post('/userLogin', function(req, res) {
  apiUserLogin({req, res});
});

router.get('/hello', function(req, res) {
  res.send('hello');
});


router.get('/login', function(req, res) {
  res.send('login!!');
});

module.exports = router;
