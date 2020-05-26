const cssLoaders = require('./cssLoaders');
const jsLoaders = require('./jsLoaders');
const babelOptions = require('./babelOptions');

const rules = (isDev) => [
  { 
    test: /\.js$/, 
    exclude: /node_modules/, 
    use: jsLoaders(isDev)
  },
  { 
    test: /\.ts$/, 
    exclude: /node_modules/, 
    loader: {
      loader: 'babel-loader',
      options: babelOptions('@babel/preset-typescript')
    }
  },
  { 
    test: /\.jsx$/, 
    exclude: /node_modules/, 
    loader: {
      loader: 'babel-loader',
      options: babelOptions('@babel/preset-react')
    }
  },
  {
    test: /\.css$/,
    use: cssLoaders(null, isDev)
  },
  {
    test: /\.less$/,
    use: cssLoaders('less-loader', isDev)
  },
  {
    test: /\.s[ac]ss$/,
    use: cssLoaders('sass-loader', isDev)
  },
  {
    test: /\.(png|jpg|svg|gif)$/,
    use: ['file-loader']
  },
  {
    test: /\.(ttf|woff|woff2|eot)$/,
    use: ['file-loader']
  },
  {
    test: /\.xml$/,
    use: ['xml-loader']
  },
  {
    test: /\.csv$/,
    use: ['csv-loader']
  },
];

module.exports = rules;