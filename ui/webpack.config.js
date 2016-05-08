var ExtractTextPlugin = require("extract-text-webpack-plugin");
var path = require("path");

module.exports = {
    entry: {
        react: 'src/react.js',
        helloworld: 'src/testing_examples/helloworld.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: __dirname + 'public/build'
    },
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
            },
            {
                test: /\.html/,
                loader: 'mustache?minify'
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
