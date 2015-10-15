var config = require('../config').js,
	gulp = require('gulp'),
	concat = require('gulp-concat'),
	plumber = require('gulp-plumber'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	uglify = require('gulp-uglify'),
	gulpIf = require('gulp-if'),
	argv = require('yargs').argv;

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
