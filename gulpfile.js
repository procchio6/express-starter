const babel = require('gulp-babel');
const flow = require('gulp-flowtype');
const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');

/**
 * Compile scripts to build folder
 */
gulp.task('scripts', () => (
  gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('build'))
));

/**
 * Check for type errors using flow
 */
gulp.task('flow', () => (
  gulp.src('src/**/*.js')
    .pipe(flow({
      killFlow: false,
      declarations: './flow-typed',
    }))
));

/**
 * Watch scripts in src folder
 */
gulp.task('watch', ['flow', 'scripts'], () => {
  gulp.watch('src/**/*.js', ['flow', 'scripts']);
});

/**
 * Default task
 */
gulp.task('default', ['watch']);
