var gulp = require('gulp');
var connect = require('gulp-connect-php');
var browserSync = require('browser-sync');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');
var rimraf = require('rimraf');
var uiConfig = require('./ui.config.js');
var path = require('path');
var projectRoot = path.join(__dirname, '../');
var fileExists = require('file-exists');
var phpcs = require('gulp-phpcs');
var phpmd = require('gulp-phpmd-plugin');
var del = require('del');


gulp.task('clean', del.bind(null, uiConfig.cleanup_dir, {force: true}));

gulp.task('webpack', function () {
    gulp.src('./src/**')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest(uiConfig.public + '/build'));
});

gulp.task('reload', function () {
    browserSync.reload();
});

gulp.task('reload-php', ['clean'], function () {
    browserSync.reload();
});

gulp.task('php', function () {
    connect.server({
        port: 8080,
        base: uiConfig.public
    })
});

gulp.task('browser-sync', function () {
    browserSync({
        proxy: uiConfig.server
    });
});

gulp.task('watch-reload', function () {
    gulp.watch(
        uiConfig.watch_to_sync,
        ['reload']
    );
    gulp.watch(
        '../src/**/*.php',
        ['reload-php']
    );
});

gulp.task('watch-ui', function () {
    gulp.watch([
        './src/**/*.js',
        './src/**/*.css',
        './*.js'
    ], ['webpack']);
});

gulp.task('watch-php', function () {
    gulp.watch([
        '../src/**/*.php'
    ], ['clean', 'phpcs', 'phpmd']);
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
gulp.task('start', ['webpack', 'php', 'watch-ui', 'watch-php']);
// start web server with hot deploy
gulp.task('start-hot', ['webpack', 'php', 'browser-sync', 'watch-ui', 'watch-reload']);
