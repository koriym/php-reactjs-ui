var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");
var uiConfig = require('./ui.config.js');

module.exports = {
    entry: uiConfig.entry,
    output: {
        filename: '[name].bundle.js',
        path: uiConfig.build
    },
    devtool: 'inline-source-map',
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: "eslint-loader",
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.(js)$/,
                loader: 'babel',
                exclude: /(node_modules)/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader")
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.(eot|woff|woff2|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
                loader: 'url?size=8192&limit=100000&name=[name].[ext]'
            }
        ]
    },
    resolve: {
        modulesDirectories: [__dirname + '/../node_modules', __dirname],
        extensions: ["", ".webpack-loader.js", ".web-loader.js", ".loader.js", ".js"]
    },
    plugins: [
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
