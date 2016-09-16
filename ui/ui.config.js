var path = require("path");
var base = path.join(__dirname, '../');

module.exports = {
  public: base + 'var/www',
  publicPath: 'http://localhost:8080/', // CDN
  build: base + 'var/www/build',
  watch_to_sync: [
    base + 'var/www/build/*',
    base + 'src/**/*.twig',
    base + 'var/lib/twig/*.twig',
  ],
  cleanup_dir: [
    base + 'var/tmp/*',
  ],
  server: '127.0.0.1:8080',
  entry: {
    react: 'src/react.js',
    helloworld: 'src/testing_examples/helloworld.jsx',
    ssr: 'src/testing_examples/ssr.js',
  }
};
