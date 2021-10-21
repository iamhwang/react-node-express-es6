'use strict';

var express = require('express');
var path = require('path');

var router = express.Router();

//html file
var index = path.join(__dirname, '../client/build/index.html');
//app.use('./static', express.static(path.join(__dirname, '../client/build/index.html')));

router.get('*', function (req, res) {
    res.sendFile(index);
});

module.exports = router;
//# sourceMappingURL=route.js.map