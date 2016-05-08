// Karma configuration
// Generated on Wed Apr 27 2016 17:05:06 GMT+0900 (JST)

module.exports = function (config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],


    // list of files / patterns to load in the browser
    files: [
      'test/**/*.spec.js'
    ],


    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'src/**/*.js': ['webpack', 'sourcemap'],
      'test/**/*.spec.js': ['webpack', 'sourcemap']
    },


    webpack: { //kind of a copy of your webpack config
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      resolve: {
        extensions: ['', '.js', '.ts'],
        modulesDirectories: [__dirname + '/../node_modules', __dirname]
      },
      module: {
        loaders: [
          {
            test: /\.js$/,
            exclude: /\/node_modules\//,
            loader: 'babel',
          }
        ]
      },
      externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      }
    },

    
    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['spec', 'coverage'],


    coverageReporter: {
      type: 'html',
      dir: 'build/coverage/'
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-phantomjs-launcher',
      'karma-chrome-launcher',
      'karma-sourcemap-loader',
      'karma-chai',
      'karma-coverage',
      'karma-spec-reporter'
    ],

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome', 'PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
