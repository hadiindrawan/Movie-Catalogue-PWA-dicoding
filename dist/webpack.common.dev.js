"use strict";

var HtmlWebpackPlugin = require('html-webpack-plugin');

var CopyWebpackPlugin = require('copy-webpack-plugin');

var ServiceWorkerWebpackPlugin = require('serviceworker-webpack-plugin');

var path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src/scripts/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: [{
        loader: 'style-loader'
      }, {
        loader: 'css-loader'
      }]
    }]
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, 'src/templates/index.html'),
    filename: 'index.html'
  }), new CopyWebpackPlugin({
    patterns: [{
      from: path.resolve(__dirname, 'src/public/'),
      to: path.resolve(__dirname, 'dist/')
    }]
  }), new ServiceWorkerWebpackPlugin({
    entry: path.resolve(__dirname, 'src/scripts/sw.js')
  })]
};