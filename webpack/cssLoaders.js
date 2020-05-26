const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const cssLoaders = (extra, isDev) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDev,
        reloadAll: true
      }
    },
    'css-loader',
  ];

  if (extra) {
    loaders.push(extra);
  }

  return loaders;
}

module.exports = cssLoaders;