const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const debug = require('debug')('app:webpack:config')

const basePath = path.resolve(__dirname);
const publicPath = '/';


module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        path.join(basePath, "src/main.tsx"),
    ],
    output: {
        filename: 'bundle.js',
        path: path.join(basePath, "dist"),
        publicPath
    },
    context: path.join(basePath, 'src'),
    devtool: 'eval',
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js", 'jsx']
    },
    module: {
        loaders: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                loaders: [
                    'react-hot-loader/webpack',
                    'awesome-typescript-loader'
                ]
            }
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
        new webpack.HotModuleReplacementPlugin()
    ]
};