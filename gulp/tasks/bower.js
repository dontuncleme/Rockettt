var config = require('../config').bower,
	gulp = require('gulp'),
	bower = require('main-bower-files'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	gulpIf = require('gulp-if'),
	argv = require('yargs').argv;

// Minify (Optional argument: --minify)
gulp.task('bower', function () {
	return gulp.src(bower())
		.pipe(concat(config.target))
		.pipe(gulpIf(
			argv.minify,
			uglify()
		))
		.pipe(gulp.dest(config.dest));
});
