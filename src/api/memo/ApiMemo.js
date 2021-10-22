import express from 'express';
import apiMemosGet from './memosGet/apiMemosGet';

const router = express.Router();

router.post('/memosGet', function(req, res) {
  console.log(11);
  apiMemosGet({req, res});
});

module.exports = router;
