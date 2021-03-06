var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var webpackConfig = require('../webpack.config');


new WebpackDevServer(webpack(webpackConfig), {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    historyApiFallback: true
}).listen(3000, 'localhost', (err, result) => {
    if (err) {
        return console.log(err);
    }
    console.log('Listening at http://localhost:3000/');
});
