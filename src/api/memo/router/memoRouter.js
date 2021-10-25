import express from 'express';
import { apiMemosGet } from '../api/memoApi';

const router = express.Router();

router.post('/memosGet', function(req, res) {
  apiMemosGet({req, res});
});

module.exports = router;
