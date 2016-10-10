const gulp = require('gulp');
const clean = require('gulp-clean');

gulp.task('copy-files', [], function() {
    console.log("Moving all files in styles folder");
    gulp.src("app/dev/**.js")
        .pipe(gulp.dest('app/prod/'));
});

gulp.task('clean-scripts', function () {
    return gulp.src('app/dev/**.js', {read: false})
        .pipe(clean());
});

gulp.task('stream', function () {
    return watch('app/**/*.js', { ignoreInitial: false })
        .pipe(gulp.dest('build'));
});

gulp.task('watch', function() {
    gulp.watch('app/dev', ['copy-files', 'clean-scripts']);
});

gulp.task('default', ['copy-files', 'clean-scripts']);