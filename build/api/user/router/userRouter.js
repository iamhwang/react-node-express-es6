'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _userApi = require('../api/userApi');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.post('/userLogin', function (req, res) {
  (0, _userApi.apiUserLogin)({ req: req, res: res });
});

router.post('/hello', function (req, res) {
  console.log(1);
});

router.post('/user/userLogin', function (req, res) {
  console.log(111111);
});

router.post('/user/router/userRouter/userLogin', function (req, res) {
  console.log(111111111);
});

module.exports = router;
//# sourceMappingURL=userRouter.js.map