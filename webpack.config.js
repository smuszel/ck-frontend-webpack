const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');

/** @type {webpack.Configuration} */
module.exports = {
    output: {
        filename: 'abc.js'
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    entry: {
        path: path.resolve(__dirname, 'src', 'index.js')
    },
    module: {
        rules: [
            { test: /(\.jsx|\.js)/, exclude: /node_modules/, use: 'babel-loader' }
        ]
    },
    mode: 'development',
    devtool: 'source-map',
    plugins: [
        new webpack.ProgressPlugin(),
        new HtmlPlugin()
    ],
};