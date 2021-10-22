'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _apiMemosGet = require('./memosGet/apiMemosGet');

var _apiMemosGet2 = _interopRequireDefault(_apiMemosGet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/memosGet', function (req, res) {
  console.log(11);
  (0, _apiMemosGet2.default)({ req: req, res: res });
});

module.exports = router;
//# sourceMappingURL=ApiMemo.js.map