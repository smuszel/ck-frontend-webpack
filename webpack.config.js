const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');
const path = require('path');

/** @type {webpack.Configuration} */
const config = {
    output: {
        filename: 'abc.js'
    },
    resolve: {
        // modules: ['./src', './node_modules'],
        extensions: ['js', 'jsx']
    },
    // entry: {
    //     path: path.resolve(__dirname, 'src', 'index.js')
    // },
    module: {
        rules: [
            { test: /(\.jsx|\.js)/, use: 'babel-loader' }
        ]
    },
    mode: 'development',
    devtool: 'source-map',
    plugins: [
        new webpack.ProgressPlugin(),
        // new HtmlPlugin({ template: path.resolve(__dirname, 'index.html')})
    ],
};

module.exports = config