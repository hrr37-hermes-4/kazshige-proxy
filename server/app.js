const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const proxy = require('http-proxy-middleware');

const app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));

const staticPath = `${__dirname}/../public`;
app.use('books/:id', express.static(staticPath));

app.use(
  '/books/:id/bookInfo',
  proxy({ target: 'http://localhost:3002', changeOrigin: true})
);

module.exports = app;