const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const WEB_TITLE = 'Resume parser';

module.exports = {
  entry: './src/main.js',
  devServer: {
    // overlay: true,
  },
  output: {
    filename: './bundle.js',
    path: path.join(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ['babel-loader', 'eslint-loader'],
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.vue$/,
        loaders: ['vue-loader', 'eslint-loader'],
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.js$/,
      minimize: true,
      sourceMap: true,
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      title: WEB_TITLE,
      inject: true,
      hash: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
    }),
  ],
};
