var gulp = require('gulp');
var connect = require('gulp-connect-php');
var browserSync = require('browser-sync').create();
var webpack = require('webpack-stream');
var webpackConfig = require('./webpack.config.js');
var rimraf = require('rimraf');
var uiConfig = require('./ui.config.js');
var path = require('path');
var projectRoot = path.join(__dirname, '../');
var fileExists = require('file-exists');
var phpcs = require('gulp-phpcs');
var phpmd = require('gulp-phpmd-plugin');
var del = require('del');
var w = require('webpack');
var bundler = w(webpackConfig);
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackPath = uiConfig.base + uiConfig.publicPath;

gulp.task('clean', del.bind(null, uiConfig.cleanup_dir, {force: true}));

gulp.task('webpack', function () {
  return gulp.src('./src/**')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest(webpackPath));
});

gulp.task('reload-php', ['clean'], function () {
  browserSync.reload();
});

gulp.task('reload-php', ['clean'], function () {
  browserSync.reload();
});

gulp.task('php', ['webpack'], function () {
  return connect.server({
    port: 8080,
    base: uiConfig.base
  })
});

gulp.task('browser-sync', ['php'], function () {
  browserSync.init({
    proxy: {
      target: "127.0.0.1:8080",
      middleware: [
        webpackDevMiddleware(bundler, {
          // IMPORTANT: dev middleware can't access config, so we should
          // provide publicPath by ourselves
          publicPath: webpackConfig.output.publicPath,

          // pretty colored output
          stats: {colors: true}

          // for other settings see
          // http://webpack.github.io/docs/webpack-dev-middleware.html
        }),

        // bundler should be the same as above
        webpackHotMiddleware(bundler)
      ]
    },

    // no need to watch '*.js' here, webpack will take care of it for us,
    // including full page reloads if HMR won't work
    files: [
      './src/**/*.css',
      './src/**/*.html',
      '../src/**/*.php',
    ]
  });
});

gulp.task('watch-reload', ['browser-sync'], function () {
  gulp.watch(
    uiConfig.watch,
    ['reload']
  );
  gulp.watch(
    '../src/**/*.php',
    ['reload-php']
  );
});

gulp.task('sync', ['browser-sync'], function () {
  gulp.watch(
    uiConfig.watch_to_sync,
    ['reload']
  );
});

gulp.task('php-clean', ['php'], function () {
  gulp.watch(
    '../src/**/*.php',
    ['clean']
  );
});

gulp.task('php-cs', ['php'], function () {
  gulp.watch(
    '../src/**/*.php',
    ['clean', 'phpcs', 'phpmd']
  );
});

gulp.task('phpcs', function () {
  var standard = fileExists(projectRoot + '/phpcs.xml') ? projectRoot + '/phpcs.xml' : 'psr2';
  return gulp.src(projectRoot + '/src/**/*.php')
    .pipe(phpcs({
      bin: projectRoot + '/vendor/bin/phpcs',
      standard: standard,
      warningSeverity: 0,
      colors: true
    }))
    .pipe(phpcs.reporter('log'));
});

gulp.task('phpmd', function () {
  var ruleset = fileExists(projectRoot + '/phpmd.xml') ? projectRoot + '/phpmd.xml' : 'unusedcode';
  return gulp.src(projectRoot + '/src/**/*.php')
    .pipe(phpmd({
      bin: projectRoot + 'vendor/bin/phpmd',
      format: 'text',
      ruleset: ruleset
    }))
    .pipe(phpmd.reporter('log'));
});

// start web server
gulp.task('start', ['php']);
// start web server with hot deploy
gulp.task('dev', ['sync', 'php-clean', 'php-cs']);
