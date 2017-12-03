//fetches newest version from http://ledoux.io/bitsy/editor.html hompage
var gulp     = require('gulp');
var wget = require('wgetpage');
var download = require('gulp-download-stream');


var URL = 'http://ledoux.io/bitsy/';
var INDEX = 'editor.html';
var DEST = 'app/';
var MISSING = [
    'exportStyleFixed.css',
    'exportStyleFull.css',
    'exportTemplate.html'
];

gulp.task('fetch-editor', [], function(cb){
    wget(URL+INDEX, DEST,cb);
    //gulp.src(['app/**']).pipe(function(a){console.log(a)})
});

gulp.task('fetch-missing', [], function(){
   var missingUrls =  MISSING.map(function(name){return URL + name;});
   return download(missingUrls).pipe(gulp.dest("app/"));
});

gulp.task('fetch', ['fetch-missing', 'fetch-editor']);



