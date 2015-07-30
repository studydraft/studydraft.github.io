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

var paths = {
  sass: {
    src: 'assets/scss/*.scss',
    dest: 'assets/css'
  }
};

gulp.task('sass', function() {
  gulp.src(paths.sass.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(paths.sass.dest));
});

gulp.task('watch', function() {
  gulp.watch(paths.sass.src, ['sass']);
});;

gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['watch', 'sass', 'webserver']);
