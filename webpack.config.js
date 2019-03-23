const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loader: 'babel-loader',
      },
      {
        test:/\.(css|scss)$/,
        loader: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test:/\.(jpg|jpeg|gif)$/,
        exclude:/node_modules/,
        loader: 'file-loader',
      }
    ]
  },
}