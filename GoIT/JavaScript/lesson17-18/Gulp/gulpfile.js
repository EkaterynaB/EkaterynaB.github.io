var gulp = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var autoprefixer = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
//var watch = require('gulp-watch');

gulp.task('cssConcat', function() {
  return gulp.src('./css/*.css')
  .pipe(autoprefixer())
  .pipe(cssmin())
  .pipe(concat('css.min.css'))
  .pipe(gulp.dest('./dist'));
});

gulp.task('jsConcat', function() {
  return gulp.src('./js/*.js')
  .pipe(concat('js.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./dist'));
});

gulp.task('watch', function() {
  gulp.watch('./css/**/*.css', ['cssConcat']);
  gulp.watch('./js/**/*.js', ['jsConcat']);
});

gulp.task('default', ['cssConcat', 'jsConcat', 'watch']);
