const gulp = require('gulp')
const plumber = require('gulp-plumber')
const webpack = require('webpack-stream')
const CircularDependencyPlugin = require('circular-dependency-plugin')
const DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin")

const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

module.exports = function script() {
  return gulp.src('src/modules/**/*.js')
    .pipe(plumber())
    .pipe(babel({
      presets: ['@babel/env']
  }))
    .pipe(uglify())
    .pipe(gulp.dest('build'))
}

