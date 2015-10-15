var gulp = require('gulp'),
	run = require('run-sequence');

gulp.task('default', function (done) {
	run('watch', 'server', done);
});
