const filename = (ext, isDev) => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

module.exports = filename;