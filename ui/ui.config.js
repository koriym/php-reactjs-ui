var path = require("path");
var base = path.join(__dirname, '../');

module.exports = {
  public: base + 'var/www',
  build: base +  'var/www/build',
  watch_to_sync:  [
    base + 'var/www/build/*',
    base + 'src/**/*.twig',
    base + 'var/lib/twig/*.twig',
  ],
  cleanup_dir: [
    base + 'var/tmp/*',
  ],
  server: '127.0.0.1:8080'
};
