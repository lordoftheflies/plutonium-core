const proxy = require('koa-proxies');

module.exports = {
  port: 9000,
  middlewares: [
    proxy('/api', {
      target: 'http://localhost:8001',
    }),
  ],
  plugins: [
    {
      serve(context) {
        if (context.path === '/index.html') {
          return { body: indexHTML };
        }
      },
    },
  ],
  watch: true,
  nodeResolve: true,
  appIndex: 'index.html',
  plugins: [],
  moduleDirs: ['node_modules', 'web_modules'],
};
