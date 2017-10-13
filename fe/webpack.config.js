var packageJSON = require('./package.json');
var path = require('path');
var webpack = require('webpack');

const PATHS = {
    build: path.resolve(__dirname, 'target', 'classes', 'META-INF', 'resources', 'webjars', packageJSON.name, packageJSON.version)
};

module.exports = {
    entry: './app/index.js',
    output: {
        path: PATHS.build,
        filename: 'app-bundle.js',
    },
    module: {
        rules: [
          {
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
          }
        ]
      }
};