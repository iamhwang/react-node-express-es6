'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _api_userLogin = require('./api/user/userLogin/api_userLogin');

var _api_userLogin2 = _interopRequireDefault(_api_userLogin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* SETTING */
var app = (0, _express2.default)();

/* ROUTE */

app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: true }));

app.use("/api/user/", _api_userLogin2.default);
app.use(_express2.default.static(_path2.default.join(__dirname, '../client/build')));

app.get("*", function (req, res) {
  res.send(_express2.default.static(_path2.default.join(__dirname, '../client/build/index.html')));
});

module.exports = app;
//# sourceMappingURL=app.js.map