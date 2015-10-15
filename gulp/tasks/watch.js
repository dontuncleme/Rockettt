var config = require('../config').proc,
	gulp = require('gulp');

gulp.task('watch', ['build'], function () {
	gulp.watch(['bower.json', 'package.json'], ['bower']);
	gulp.watch('src/images/**/*', ['images']);
	gulp.watch('src/js/*', ['js']);
	gulp.watch(['src/**/*.jade', 'src/tpl/**/*.json'], ['jade']);
	gulp.watch('src/css/**/*.css', ['css']);
});
