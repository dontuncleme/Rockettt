var config = require('../config').css,
	gulp = require('gulp'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload,
	plumber = require('gulp-plumber'),
	gulpIf = require('gulp-if'),
	argv = require('yargs').argv;

// PostCSS & plugins
var postcss = require('gulp-postcss'),
	cssmport = require('postcss-import'),
	autoprefixer = require('autoprefixer'),
	cssnano = require('cssnano'),
	cssnext = require('postcss-cssnext'),
	precss = require('precss'),
	propertyLookup = require('postcss-property-lookup');

// Minify (Optional argument: --minify)
gulp.task('css', function () {
	var processors = [
		cssmport( {path: config.paths} ),
		precss,
		cssnext,
		propertyLookup,
		autoprefixer({ browsers: config.prefix })
	];

	return gulp.src(config.src)
		.pipe(plumber())
		.pipe(postcss(processors))
		.pipe(gulpIf(
			argv.minify,
			postcss([
				cssnano({ discardComments: {removeAll: true} })
			])
		))
		.pipe(gulp.dest(config.dest))
		.pipe(reload({ stream: true }));
});
