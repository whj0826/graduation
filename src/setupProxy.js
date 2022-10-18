const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/file',
        createProxyMiddleware({
            target: 'http://localhost:6060',
            changeOrigin: true,
        })
    );
};