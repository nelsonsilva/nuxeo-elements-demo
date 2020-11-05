const proxy = require('koa-proxies');

module.exports = {
  port: 5000,
  watch: true,
  nodeResolve: true,
  preserveSymlinks: true,
  appIndex: 'index.html',
  middlewares: [
    proxy('/nuxeo', {
      target: 'http://localhost:8080/',
    }),
  ],
};