var config = require('../config').css,
	argv = require('yargs').argv,
	browserSync = require('browser-sync'),
	gulp = require('gulp'),
	gulpIf = require('gulp-if'),
	plumber = require('gulp-plumber'),
	reload = browserSync.reload;

// PostCSS & plugins
var autoprefixer = require('autoprefixer'),
	cssmport = require('postcss-import'),
	cssnano = require('cssnano'),
	fixes = require('postcss-fixes'),
	minmax = require('postcss-media-minmax'),
	postcss = require('gulp-postcss'),
	precss = require('precss'),
	propertyLookup = require('postcss-property-lookup'),
	svg = require('postcss-svg'),
	willchange = require('postcss-will-change');

// Minify (Optional argument: --minify)
gulp.task('css', function () {
	var processors = [
		autoprefixer({ browsers: config.prefix }),
		cssmport( {path: config.paths} ),
		fixes,
		minmax,
		precss,
		propertyLookup,
		svg({
			ei: false,
			paths: config.svgPath
		}),
		willchange
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
