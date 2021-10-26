'use strict';

/*import glob from 'glob';

const viewPaths = glob.sync('').map(path => {
    return path.substring(0, path.length)
})

console.log(viewPaths);

export default viewPath;
};
*/

var glob = require('glob');
var Router = require('express').Router;
module.exports = function () {
    return glob.sync('./api/**/router/*.js', { cwd: __dirname + '/' }).map(function (filename) {
        return require('./' + filename);
    }).filter(function (router) {
        return Object.getPrototypeOf(router) == Router;
    }).reduce(function (rootRouter, router) {
        return rootRouter.use(router);
    }, Router({ mergeParams: true }));
};
//# sourceMappingURL=viewPaths.js.map