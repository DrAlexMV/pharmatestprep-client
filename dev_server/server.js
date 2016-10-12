const path = require('path');
const express = require('express');
const debug = require('debug')('app:server');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');

const app = express()
const basePath = path.resolve(__dirname, "../");
const compiler = webpack(webpackConfig)

app.use(require('connect-history-api-fallback')());
app.use(require('webpack-dev-middleware')(compiler, {
    contentBase: path.join(basePath, 'src'),
    hot: true,
    lazy: false,
    quiet: false,
    publicPath: webpackConfig.output.publicPath
}));
app.use(require('webpack-hot-middleware')(compiler));
app.listen(3000, () => console.log('Listening on port 3000'));
