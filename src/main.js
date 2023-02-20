//express
const express = require('express');

//proxy middleware
const { createProxyMiddleware } = require('http-proxy-middleware');
const { config } = require('./configs/proxy.config');

//express app
const app = express();

// proxy middleware options
config.PROXIES.forEach((proxy) => {
    app.use(proxy.pathToReplace, createProxyMiddleware({
        target: proxy.target,
        changeOrigin: proxy.changeOrigin,
        pathRewrite: {
            [`^${proxy.pathToReplace}`]: ''
        },
    }));
});

//start server
app.listen(config.APP_PORT || 3000);