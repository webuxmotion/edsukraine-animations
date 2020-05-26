const path = require('path');
const optimization = require('./webpack/optimization');
const filename = require('./webpack/filename');
const plugins = require('./webpack/plugins');
const rules = require('./webpack/rules');
const { isDev, isProd } = require('./webpack/mode');

module.exports = {
  devServer: {
    port: 4200,
    hot: isDev,
  },
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: ['@babel/polyfill', './index.jsx'],
  },
  output: {
    filename: filename('js', isDev),
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.json', '.png'],
    alias: {
      '@models': path.resolve(__dirname, 'src/models'),
      '@': path.resolve(__dirname, 'src')
    }
  },
  devtool: isDev ? 'source-map' : '',
  optimization: optimization(isProd),
  plugins: plugins(isDev, isProd),
  module: {
    rules: rules(isDev)
  }
}