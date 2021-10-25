/*import glob from 'glob';

const viewPaths = glob.sync('').map(path => {
    return path.substring(0, path.length)
})

console.log(viewPaths);

export default viewPath;
};
*/

const glob = require('glob')
const Router = require('express').Router
module.exports = () => glob
    .sync('./api/**/router/*.js', { cwd: `${__dirname}/` })
    .map(filename => require(`./${filename}`))
    .filter(router => Object.getPrototypeOf(router) == Router)
    .reduce((rootRouter, router) => rootRouter.use(router), Router
({ mergeParams: true }))