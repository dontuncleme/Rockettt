var config = require('../config').bower,
	argv = require('yargs').argv,
	bower = require('main-bower-files'),
	concat = require('gulp-concat'),
	gulp = require('gulp'),
	gulpIf = require('gulp-if'),
	uglify = require('gulp-uglify');

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
