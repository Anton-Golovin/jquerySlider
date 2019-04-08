'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
const terser = require('gulp-terser');
sass.compiler = require('node-sass');

gulp.task('style', function () {
  return gulp.src('./src/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist'));
});

gulp.task('script', function() {
    return gulp.src('./src/**/*.js')
        .pipe(terser())
        .pipe(gulp.dest('dist'))
});

gulp.task('default', gulp.parallel('style', 'script'));
