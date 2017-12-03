
var gulp     = require('gulp');
var del      = require('del');
var package  = require('../../package.json');

gulp.task('clean', function(cb) {
	del([ 'build/' + package.name + '/**' ], cb);
});
