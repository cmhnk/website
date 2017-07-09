const path = require('path');
const devConfig = require('./webpack.config.js');

const config = Object.assign({}, devConfig, {
  entry: [
    // path.join(__dirname, '/../app/src/main.js'),
    path.join(__dirname, '/../dist/main.bundle.js'),
  ],
});

module.exports = config;
