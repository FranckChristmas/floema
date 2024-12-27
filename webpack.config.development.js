const { merge } = require('webpack-merge');
const path = require('path');
const config = require('./webpack.config.build.js');

module.exports = merge(config, {
  mode: 'development',
});