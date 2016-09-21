var path = require("path");
var base = path.join(__dirname, '../');

module.exports = {
  // web root (gulp-connect-php.base)
  base: base + 'var/www',
  // webpack.outout.publicPath
  publicPath: '/build/',
  // watch to sync folder
  watch_to_sync: [
    base + 'src/**/*.php',
    base + 'var/www/*.php',
  ],
  cleanup_dir: [
    base + 'var/tmp/*',
  ],
  // webpack entry
  entry: {
    react: 'src/react.js',
    helloworld: [
      'webpack-hot-middleware/client',
      'src/testing_examples/helloworld.jsx',
    ],
    ssr: 'src/testing_examples/ssr.js',
  }
};
