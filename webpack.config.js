const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const debug = require('debug')('app:webpack:config')

const basePath = path.resolve(__dirname);


module.exports = {
    entry: path.join(basePath, "src/main.tsx"),
    output: {
        filename: path.join(basePath, "bundle.js"),
        path: path.join(basePath, "dist"),
        publicPath: '/'
    },
    context: path.join(basePath, 'src'),
    devtool: "source-map",
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        loaders: [
            { test: /\.tsx?$/, exclude: /node_modules/, loader: 'awesome-typescript-loader' }
        ],
        preLoaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "source-map-loader" }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(basePath, 'src/index.html'),
            hash: false,
            filename: 'index.html',
            inject: 'body',
            minify: {
                collapseWhitespace: true
            }
        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};