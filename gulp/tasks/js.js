var config = require('../config').js,
	argv = require('yargs').argv,
	browserSync = require('browser-sync'),
	concat = require('gulp-concat'),
	gulp = require('gulp'),
	gulpIf = require('gulp-if'),
	plumber = require('gulp-plumber'),
	reload = browserSync.reload,
	uglify = require('gulp-uglify');

// Minify (Optional argument: --minify)
gulp.task('js', function () {
	gulp.src(config.src)
		.pipe(plumber())
		.pipe(concat(config.target))
		.pipe(gulpIf(
			argv.minify,
			uglify()
		))
		.pipe(gulp.dest(config.dest))
		.pipe(browserSync.reload({ stream: true, once: true }));
});
