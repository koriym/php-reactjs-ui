module.exports = {
  react: 'src/react.js',
  helloworld: [
    'webpack-hot-middleware/client',
    'src/testing_examples/helloworld.jsx',
  ],
  ssr: [
    'webpack-hot-middleware/client',
    'src/testing_examples/ssr.js',
  ]
};
