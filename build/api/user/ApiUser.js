'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _apiUserLogin = require('./userLogin/apiUserLogin');

var _apiUserLogin2 = _interopRequireDefault(_apiUserLogin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/userLogin', function (req, res) {
  (0, _apiUserLogin2.default)({ req: req, res: res });
});

router.post('/hello', function (req, res) {
  console.log(1);
});

module.exports = router;
//# sourceMappingURL=ApiUser.js.map