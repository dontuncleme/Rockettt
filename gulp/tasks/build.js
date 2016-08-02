var config = require('../config'),
	gulp = require('gulp'),
	run = require('run-sequence');

gulp.task('build', ['clean'], function (done) {
	run('images', 'bower', 'js', 'pug', 'css', done);
});
