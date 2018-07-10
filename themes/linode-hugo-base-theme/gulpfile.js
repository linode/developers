const gulp = require('gulp');
const webpackStream = require('webpack-stream');
const cssInfo_config = require('./cssInfo.config.js');
const webpack_config = require('./webpack.config.js');
const cssInfo = require('gulp-css-info');

const output = 'static/assets/css/';

gulp.task('cssInfo', () => {
  gulp.src('./index.js')
    .pipe(webpackStream(cssInfo_config))
    .pipe(cssInfo())
    .pipe(gulp.dest(output))
});

gulp.task('webpack', ['cssInfo'], () => {
  return gulp.src('./index.js')
    .pipe(webpackStream(webpack_config))
    .pipe(gulp.dest(output));
});

gulp.task('default', ['webpack']);