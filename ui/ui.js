var path = require("path");
var projectDir = path.join(__dirname, '../');

module.exports = {
  // project root directory
  projectDir: projectDir,
  // web root directory
  publicDir: projectDir + 'var/www',
  // webpack.outout.publicPath
  publicPath: '/build/',
  // watch directory for browsersync
  watchDir: [
    projectDir + 'src/**/*.php',
    projectDir + 'var/www/*.php',
  ],
  // cleared directory in each run
  clearDir: [
    projectDir + 'var/tmp/*',
  ],
  // webpack.entry
  entry: {
    react: 'src/react.js',
    helloworld: [
      'webpack-hot-middleware/client',
      'src/testing_examples/helloworld.jsx',
    ],
    ssr: [
      'webpack-hot-middleware/client',
      'src/testing_examples/ssr.js',
    ]
  }
};
