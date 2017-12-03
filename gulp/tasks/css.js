
var gulp    = require('gulp');
var myth    = require('gulp-myth');
var cssmin  = require('gulp-cssmin');
var concat  = require('gulp-concat');

gulp.task('css', function() {
	return gulp.src(['app/css/normalize.css', 'app/css/base.css', 'app/src/views/**/*.css'])
		.pipe(myth())
		.pipe(concat('bundle.css'))
		.pipe(cssmin())
		.pipe(gulp.dest('app/css'));
});
