// vue.config.js

const path = require('path');
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const BrotliPlugin = require('brotli-webpack-plugin');
const PurgecssPlugin = require('purgecss-webpack-plugin');
const glob = require('glob-all');

module.exports = {
  crossorigin: 'anonymous',
  integrity: true,
  configureWebpack: {
    plugins: [
      new PurgecssPlugin({
        paths: glob.sync([
          path.join(__dirname, './public/index.html'),
          path.join(__dirname, './**/*.vue'),
          path.join(__dirname, './src/**/*.js'),
        ]),
      }),
      new PreloadWebpackPlugin(),
      new CompressionPlugin({
        filename: '[path].gz[query]',
        algorithm: 'gzip',
        test: /\.(js|css)$/,
        cache: true,
        threshold: 10240,
        minRatio: 0.8,
      }),
      new BrotliPlugin({
        asset: '[path].br[query]',
        test: /\.(js|css)$/,
        threshold: 10240,
        minRatio: 0.8,
      }),
    ],
  },
};
