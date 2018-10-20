var gulp = require('gulp');
var pug = require('gulp-pug');
var sass = require('gulp-sass')


gulp.task('views', function buildHTML() {
    return gulp.src('src/templates/*.pug')
        .pipe(pug({}))
        .pipe(gulp.dest('./dist'))
});

gulp.task('sass', function buildSASS() {
    return gulp.src('src/styles/*.sass')
        .pipe(sass({}))
        .pipe(gulp.dest('./dist/css'))
});

gulp.task('default', function() {
    gulp.start([
        'views',
        'sass'
    ]);
});