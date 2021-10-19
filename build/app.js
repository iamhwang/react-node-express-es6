'use strict';

var express = require('express');
var path = require('path');
/*
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
*/
var app = express();

/*
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
*/

app.use(express.static(path.join(__dirname, '../client/build')));

/*
app.use('/', indexRouter);
app.use('/users', usersRouter);
*/

app.get('/api/data/', function (req, res) {
  var data = {
    data: 100
  };
  res.send(data);
});

app.get('/api/test/1', function (req, res) {
  var data = {
    data: 1
  };
  res.send(data);
});

app.get('/api/test/2', function (req, res) {
  var data = {
    data: 2
  };
  res.send(data);
});

app.get('*', function (req, res) {
  res.send(express.static(path.join(__dirname, '../client/build/index.html')));
});

module.exports = app;
//# sourceMappingURL=app.js.map