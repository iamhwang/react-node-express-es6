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
    dataaa: 3333
  };
  res.send(data);
});

app.get('/api/dataa', function (req, res) {
  var data = {
    dataaa: 11111
  };
  res.send(data);
});

app.get('/api/dataaa', function (req, res) {
  var data = {
    dataaa: 2222
  };
  res.send(data);
});

app.get('*', function (req, res) {
  res.send(express.static(path.join(__dirname, '../client/build/index.html')));
});

module.exports = app;
//# sourceMappingURL=app.js.map