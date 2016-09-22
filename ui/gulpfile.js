var gulp = require('gulp');
var connect = require('gulp-connect-php');
var browserSync = require('browser-sync').create();
var webpack = require('webpack');
var webpackConfig = require('./webpack.config.js');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var webpackStream = require('webpack-stream');
var ui = require('./ui.js');
var del = require('del');
var fileExists = require('file-exists');
var phpcs = require('gulp-phpcs');
var phpmd = require('gulp-phpmd-plugin');
var bundler = webpack(webpackConfig);
var webpackPath = ui.publicDir + ui.publicPath;

gulp.task('clean', del.bind(null, ui.clearDir, {force: true}));

gulp.task('webpack', function () {
  return gulp.src('./src/**')
    .pipe(webpackStream(webpackConfig))
    .pipe(gulp.dest(webpackPath));
});

gulp.task('reload', ['clean'], function () {
  browserSync.reload();
});

gulp.task('php', ['clean', 'webpack'], function () {
  return connect.server({
    port: 8080,
    base: ui.publicDir
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

gulp.task('sync', ['browser-sync'], function () {
  gulp.watch(
    ui.watchDir,
    ['reload']
  );
});

gulp.task('php-clean', ['php'], function () {
  gulp.watch(
    '../src/**/*.php',
    ['clean']
  );
});

gulp.task('phpqa', ['php'], function () {
  gulp.watch(
    '../src/**/*.php',
    ['clean', 'phpcs', 'phpmd']
  );
});

gulp.task('phpcs', function () {
  var standard = fileExists(ui.ProjectDir + '/phpcs.xml') ? ui.ProjectDir + '/phpcs.xml' : 'psr2';
  return gulp.src(ui.ProjectDir + '/src/**/*.php')
    .pipe(phpcs({
      bin: ui.ProjectDir + '/vendor/bin/phpcs',
      standard: standard,
      warningSeverity: 0,
      colors: true
    }))
    .pipe(phpcs.reporter('log'));
});

gulp.task('phpmd', function () {
  var ruleset = fileExists(ui.ProjectDir + '/phpmd.xml') ? ui.ProjectDir + '/phpmd.xml' : 'unusedcode';
  return gulp.src(ui.ProjectDir + '/src/**/*.php')
    .pipe(phpmd({
      bin: ui.ProjectDir + 'vendor/bin/phpmd',
      format: 'text',
      ruleset: ruleset
    }))
    .pipe(phpmd.reporter('log'));
});

// start web server
gulp.task('start', ['php']);
// start web server with hot deploy
gulp.task('dev', ['sync']);
