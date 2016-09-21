var path = require("path");
var base = path.join(__dirname, '../');

module.exports = {
  // web root
  public: base + 'var/www',
  htdocs: base + 'var/www',
  // webpack output.path
  path: base + 'var/www/build',
  // webpack outout.publicPath
  publicPath: '/dist/',
  // publicPath: "http://cdn.example.com/assets/[hash]/",
  // watch to sync folder
  watch_to_sync: [
    base + 'src/**/*.js',
    base + 'src/**/*.jsx',
    base + 'src/**/*.php',
    base + 'src/**/*.twig',
    base + 'var/lib/twig/*.twig',
    base + 'ui/src/**/*.css',
    base + 'ui/src/**/*.html',
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
