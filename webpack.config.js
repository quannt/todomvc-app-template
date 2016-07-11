const webpack = require('webpack');
const path = require('path');
 
const PATHS = {
  app: './src/index.js',
  html: './src/index.html',
  css: './css/app.css',
  dist: path.join(__dirname, 'dist')
};
 
module.exports = {
  entry: {
    javascript: PATHS.app,
    html: PATHS.html,
    css: PATHS.css
  },
  output: {
    path: PATHS.dist,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: PATHS.dist
  },
  module: {
    loaders: [
      {
        test: /\.html$/,
        loader: "file?name=[name].[ext]"
      },
      {
        test: /\.css$/,
        loader: "file?name=[name].[ext]"
      },
      {
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ["react-hot", "babel-loader"]
     }
    ]
  }
};