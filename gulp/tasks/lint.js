
var gulp    = require('gulp');
var jshint  = require('gulp-jshint');

gulp.task('lint', function() {
	return gulp.src('site/js/**/*.js')
		.pipe(jshint({
			sub: true,
			browser: true,
			bitwise: false,
			camelcase: false,
			eqnull: true,
			latedef: false,
			plusplus: false,
			shadow: true,
			smarttabs: true,
			loopfunc: true,
			boss: true,
			globals: {
				Promise: true
			}
		}))
		.pipe(jshint.reporter('default'));
});
