var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
var uiConfig = require('./ui.config.js');
var webpack = require('webpack');
var webpackPath = uiConfig.base + uiConfig.publicPath;

module.exports = {
  entry: uiConfig.entry,
  output: {
    filename: '[name].bundle.js',
    path: webpackPath,
    publicPath: uiConfig.publicPath,
  },
  devtool: 'cheap-eval-source-map',
  module: {
    preLoaders: [
      {
        test: /\.js$/,
        loader: "eslint",
        exclude: /node_modules/
      }
    ],
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        exclude: /(node_modules)/
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style", "css")
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        loader: 'url'
      },
      {
        test: /\.html/,
        loader: 'mustache'
      }
    ]
  },
  resolve: {
    modulesDirectories: [__dirname + '/../node_modules', __dirname],
    extensions: ["", ".webpack-loader.js", ".web-loader.js", ".loader.js", ".js"]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin("style.css", {
      allChunks: true
    })
  ],
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
};
