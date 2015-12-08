var gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('server', function() {
	browserSync.init({
		port: 9000,
		notify: false,
		open: false,
		https: true,
		reloadOnRestart: false,
		server: {
			baseDir: 'dist/',
			directory: true
		}
	});
});
