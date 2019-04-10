const express = require('express');
const path = require('path')
const bodyParser = require('body-parser');
const morgan = require('morgan');
const proxy = require('http-proxy-middleware');

app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.use('/books/:id', express.static(path.join(__dirname, '/../public')));

// mainInfo
app.use (
  '/books/:id/details',
  proxy({ target: 'http://localhost:3001', changeOrigin: true }),
);

// detailInfo
app.use (
  '/books/:id/reviews',
  proxy({ target: 'http://localhost:3003', changeOrigin: true }),
);

// Reviews

// Author

module.exports = app;