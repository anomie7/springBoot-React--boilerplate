const packageJSON = require('./package.json');
const path = require('path');
const webpack = require('webpack');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

const PATHS = {
  build: path.resolve(__dirname, 'target', 'classes', 'META-INF', 'resources', 'webjars', packageJSON.name, packageJSON.version)
};

module.exports = {
  entry: './app/index.js',
  output: {
    path: PATHS.build,
    filename: 'app-bundle.js',
    publicPath: "/assets/"
  },
  devServer: {
    historyApiFallback: true,
    inline: true,
    port: 3000,
    publicPath: "/assets/",
    contentBase: './tmp'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
          presets: ['env', 'react'],
          plugins: ["react-hot-loader/babel"]
        }
      }
    }]
  },
  devtool: 'inline-source-map',
  plugins: [
    // new CleanWebpackPlugin([PATHS.build])
  ]
};