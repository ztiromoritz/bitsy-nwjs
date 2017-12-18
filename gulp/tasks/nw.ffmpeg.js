var gulp       = require('gulp');
var NWBuilder  = require('nw-builder');

gulp.task('nw', function(cb) {
    // Read package.json
    var package = require('../../package.json');

    // Find out which modules to include
    var modules = [ ];
    if (package.dependencies) {
        modules = Object.keys(package.dependencies)
            .filter(function(m) {
                return m != 'nodewebkit'
            })
            .map(function(m) {
                return './node_modules/' + m + '/**/*'
            });
    }

    var platforms =  ['win64', 'osx64', 'linux32', 'linux64'];

    // Initialize NodeWebkitBuilder
    var nw = new NWBuilder({
        files: [ './package.json', './app/**/*' ].concat(modules),
        version: 'latest',
        cacheDir: './build/cache',
        platforms: platforms,
        checkVersions: false
    });

    nw.on('log', function(msg) {
        // Ignore 'Zipping... messages
        if (msg.indexOf('Zipping') !== 0) {
            console.log(msg);
        }
    });

    // Build!
    nw.build(function(err) {
        if (err) {
            return console.error(err)
        }

        // Handle ffmpeg for Windows
        if (platforms.indexOf('win') > -1) {
            gulp.src('./deps/ffmpegsumo/win/*')
                .pipe(gulp.dest(
                    './build/' + package.name + '/win'
                ));
        }

        // Handle ffmpeg for Mac
        if (platforms.indexOf('osx') > -1) {
            gulp.src('./deps/ffmpegsumo/osx/*')
                .pipe(gulp.dest(
                    './build/' + package.name + '/osx/node-webkit.app/Contents/Frameworks/node-webkit Framework.framework/Libraries'
                ));
        }

        // Handle ffmpeg for Linux32
        if (platforms.indexOf('linux32') > -1) {
            gulp.src('./deps/ffmpegsumo/linux32/*')
                .pipe(gulp.dest(
                    './build/' + package.name + '/linux32'
                ));
        }

        // Handle ffmpeg for Linux64
        if (platforms.indexOf('linux64') > -1) {
            gulp.src('./deps/ffmpegsumo/linux64/*')
                .pipe(gulp.dest(
                    './build/' + package.name + '/linux64'
                ));
        }

        cb(err);
    });
});

function currentPlatform() {
    if (process.platform === 'darwin') {
        return 'osx';
    }
    if (process.platform === 'win32') {
        return 'win32';
    }
    if (process.arch === 'ia32') {
        return 'linux32';
    }
    if (process.arch === 'x64') {
        return 'linux64';
    }
}
