const babelOptions = require('./babelOptions');

const jsLoaders = (isDev) => {
  const loaders = [
    {
      loader: 'babel-loader',
      options: babelOptions()
    }
  ];

  if (isDev) {
    loaders.push('eslint-loader');
  }

  return loaders;
}

module.exports = jsLoaders;