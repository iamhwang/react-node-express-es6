'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _memoApi = require('../api/memoApi');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/memosGet', function (req, res) {
  (0, _memoApi.apiMemosGet)({ req: req, res: res });
});

module.exports = router;
//# sourceMappingURL=memoRouter.js.map