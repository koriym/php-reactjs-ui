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
    publicPath: "http://cdn.example.com/assets/[hash]/"
  },
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
        test: /\.(js|jsx)$/,
        loader: 'babel',
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
      }
    ]
  },
  resolve: {
    modulesDirectories: [__dirname + '/../node_modules', __dirname],
    extensions: ["", ".webpack-loader.js", ".web-loader.js", ".loader.js", ".js", ".jsx"]
  },
  plugins: [
    new ExtractTextPlugin("style.css", {
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    })
  ],
  externals: {
    'react/addons': true,
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true
  }
};
