var config = require('../config').pug,
	gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	pug = require('gulp-pug'),
	data = require('gulp-data'),
	gulpIf = require('gulp-if'),
	argv = require('yargs').argv,
	htmlmin = require('gulp-htmlmin'),
	fs = require('fs'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload;

// Minify (Optional argument: --minify)
gulp.task('pug', function () {
	gulp.src(config.src)
		.pipe(plumber())
		.pipe(data(function(file) {
			return JSON.parse(fs.readFileSync(config.data));
		}))
		.pipe(pug({ pretty: true }))
		.pipe(gulpIf(
			argv.minify,
			htmlmin({
				collapseWhitespace: true,
				removeComments: true
			})
		))
		.pipe(gulp.dest(config.dest))
		.pipe(reload({ stream: true }));
});
