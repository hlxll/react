const { createProxyMiddleware } = require('http-proxy-middleware');  //注意写法，这是1.0以后的版本，最好按抄

module.exports = function (app) {
  // api代理到http://localhost:3000/上
    app.use(createProxyMiddleware('/api',
        {
            target: 'http://localhost:8081/',
            // 如果不写下面的，会代理到http://localhost:3000/api上
            pathRewrite: {
                '^/api': '',
            },
            changeOrigin: true,
            secure: false, // 是否验证证书
            ws: true, // 启用websocket
        }
    ));
};