'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _userRouter = require('./api/user/router/userRouter');

var _userRouter2 = _interopRequireDefault(_userRouter);

var _memoRouter = require('./api/memo/router/memoRouter');

var _memoRouter2 = _interopRequireDefault(_memoRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: true }));
app.use(_express2.default.static(_path2.default.join(__dirname, '../client/build')));

app.use('/api/user', _userRouter2.default);
app.use('/api/memo', _memoRouter2.default);

app.get("*", function (req, res) {
  res.send(_express2.default.static(_path2.default.join(__dirname, '../client/build/index.html')));
});

module.exports = app;
//# sourceMappingURL=app.js.map