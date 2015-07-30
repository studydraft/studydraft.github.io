/**
 * Commands:
 * - gulp webserver - starts a webserver that listens for file changes and reloads the page
 * - gulp livewebserver - start a webserver with no live reload, but file changes are still recognized on manual reload
 */

var gulp = require('gulp'),
  gutil = require('gulp-util'),
  webserver = require('gulp-webserver'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer');;

var src = {
  sass: './assets/*.scss'
};

gulp.task('sass', function() {
  gulp.src(src.sass)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./assets'));
});

gulp.task('watch', function() {
  gulp.watch(src.sass, ['sass']);
});;

gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['watch', 'sass', 'webserver']);
