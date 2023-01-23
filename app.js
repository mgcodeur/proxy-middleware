//dotenv configuration
require('dotenv').config()

//express
const express = require('express');

//proxy middleware
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(process.env.BASE_PATH, createProxyMiddleware({ target: process.env.BASE_URL, changeOrigin: true }));

app.listen(process.env.APP_PORT || 3000);