var path = require("path");
var base = path.join(__dirname, '../');

module.exports = {
  // web root
  htdocs: base + 'var/www',
  // webpack output.path
  path: base + 'var/www/build',
  // webpack outout.publicPath
  publicPath: "http://cdn.example.com/assets/[hash]/",
  // watch to sync folder
  watch: [
    base + 'var/www/build/*',
    base + '**/*.twig',
  ],
  // webpack entry
  entry: {
    react: 'src/react.js',
    helloworld: 'src/testing_examples/helloworld.jsx',
    ssr: 'src/testing_examples/ssr.js',
  }
};
