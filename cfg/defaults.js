/**
 * Function that returns default values.
 * Used because Object.assign does a shallow instead of a deep copy.
 * Using [].push will add to the base array, so a require will alter
 * the base array output.
 */
'use strict';

const path = require('path');
const srcPath = path.join(__dirname, '/../src');
const dfltPort = 8000;
const LIMITURL = 20000;

/**
 * Get the default modules object for webpack
 * @return {Object}
 */
function getDefaultModules() {
  return {
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        include: srcPath,
        loader: 'eslint-loader'
      }
    ],
    loaders: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["> 1%", "last 5 version", "Firefox 15"]}'
      },
      {
        test: /\.sass/,
        loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["> 1%", "last 5 version", "Firefox 15"]}!sass-loader?outputStyle=expanded&indentedSyntax'
      },
      {
        test: /\.scss/,
        loader: 'style-loader!css-loader!autoprefixer-loader?{browsers:["> 1%", "last 5 version", "Firefox 15"]}!sass-loader?outputStyle=expanded'
      },
      {
        test: /\.less/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.styl/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: `url-loader?limit=${LIMITURL}&name=assets/images/[name]-[hash:8].[ext]`
      },
      {
        test: /\.(woff|woff2|ttf|svg|eot)$/,
        loader: `url-loader?limit=${LIMITURL}&name=assets/fonts/[name]-[hash:8].[ext]`
      },
      {
        test: /\.(mp4|ogg)$/,
        loader: 'file-loader'
      }
    ]
  };
}

module.exports = {
  srcPath: srcPath,
  publicPath: '',
  port: dfltPort,
  getDefaultModules: getDefaultModules
};
