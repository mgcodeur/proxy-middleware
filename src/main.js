//express
const express = require('express');

//proxy middleware
const { createProxyMiddleware } = require('http-proxy-middleware');

// proxy config
const data = require('../proxy.config.json');

// server config
const { config } = require('./configs/server.config');

//express app
const app = express();

// proxy middleware options
data.forEach((item) => {
    app.use(item.pathRewrite, createProxyMiddleware({
        target: item.target,
        changeOrigin: item.changeOrigin,
        pathRewrite: {
            [`^${item.pathRewrite}`]: ''
        }
    }));
});

//start server
app.listen(config.APP_PORT || 3000)