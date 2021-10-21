'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _user = require('./api/user/user');

var _user2 = _interopRequireDefault(_user);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* SETTING */
var app = (0, _express2.default)();

/* ROUTE */
//import userLogin from './api/user/userLogin/api_userLogin';

app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: true }));

app.use("/api/user/", _user2.default);
app.use(_express2.default.static(_path2.default.join(__dirname, '../client/build')));

app.get("*", function (req, res) {
  res.send(_express2.default.static(_path2.default.join(__dirname, '../client/build/index.html')));
});

module.exports = app;
//# sourceMappingURL=app.js.map