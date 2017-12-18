var gulp       = require('gulp');
var NWBuilder  = require('nw-builder');

var platforms =  ['win64', 'osx64', 'linux32', 'linux64'];

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



	// Initialize NodeWebkitBuilder
	var nw = new NWBuilder({
		files: [ './package.json', './app/**/*', './custom/**/*' ].concat(modules),
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
