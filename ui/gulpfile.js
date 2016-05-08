var gulp = require('gulp');
var connect = require('gulp-connect-php');
var browserSync = require('browser-sync');
var webpack = require('gulp-webpack');
var webpackConfig = require('./webpack.config.js');
var rimraf = require('rimraf');

gulp.task('clean', function (cb) {
    rimraf('../var/tmp/*', cb);
});

gulp.task('webpack', function () {
    gulp.src('./src/**')
        .pipe(webpack(webpackConfig))
        .pipe(gulp.dest('./var/www/build'));
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
        base: '../var/www'
    })
});

gulp.task('browser-sync', function () {
    browserSync({
        proxy: '127.0.0.1:8080'
    });
});

gulp.task('watch-reload', function () {
    gulp.watch(
        [
            '../src/**/*.twig',
            '../var/lib/twig/*.twig',
            '../var/www/build/*'
        ],
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
        './src/**/*.css'
    ], ['webpack']);
});

gulp.task('watch-php', function () {
    gulp.watch([
        '../src/**/*.php'
    ], ['clean']);
});

// start web server
gulp.task('start', ['webpack', 'php', 'watch-ui', 'watch-php']);
// start web server with hot deploy
gulp.task('start-hot', ['webpack', 'php', 'browser-sync', 'watch-ui', 'watch-reload']);
