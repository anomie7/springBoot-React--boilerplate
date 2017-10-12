var packageJSON = require('./package.json');
var path = require('path');
var webpack = require('webpack');

const PATHS = {
  build: path.join(__dirname, 'target', 'classes', 'META-INF', 'resources', 'webjars', packageJSON.name, packageJSON.version)
};

module.exports = {
  entry: './app/index.js',
  output: {
    path: PATHS.build,
    filename: 'app-bundle.js',
  },
  module: {
    loaders: [
        {
            test: path.join(__dirname, '.'),
            exclude: /(node_modules)/,
            loader: 'babel',
            query: {
                cacheDirectory: true,
                presets: ['es2015', 'react']
            }
        }
    ]
},
resolve: {
    extensions: ['', '.js', '.css'],
    alias: {
        'styles': __dirname + '/static/styles',
        'images': __dirname + '/static/images'
    }
},
};