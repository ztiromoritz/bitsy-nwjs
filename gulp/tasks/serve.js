var gulp = require('gulp');
var webserver = require('gulp-webserver');

var parseArgs = require('minimist');
var options = parseArgs(process.argv.slice(2));

gulp.task('serve', function() {
    gulp.src('./')
        .pipe(webserver({
            livereload: !!options.livereload,
            port: options.port || 8000,
            directoryListing: true,
            open: "app/editor.html"
        }));
});