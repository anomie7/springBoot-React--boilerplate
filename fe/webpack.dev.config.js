const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config')

module.exports = {
    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true,
        compress: true,
        publicPath: '/assets/',
        host: "0.0.0.0",
        port: 3000,
        contentBase: webpackConfig.PATHS.build
    },
    plugins: [
        new webpack.NamedModulesPlugin() //prints more readable module names in the browser console on HMR updates
    ]
}