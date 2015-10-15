var path = require('path');

var staticPath = 'dist/assets',
	jsPath = staticPath + '/js',
	cssPath = staticPath + '/css',
	imagesPath = staticPath + '/images'

module.exports = {	
	images: {
		src: path.join(__dirname, '../src/images/**/*'),
		dest: imagesPath
	},

	bower: {
		target: 'vendor.js',
		dest: jsPath
	},

	css: {
		src: path.join(__dirname, '../src/css/style.css'),
		prefix: ['last 2 versions'],
		paths: ['node_modules', 'vendor'],
		dest: cssPath
	},

	jade: {
		src: path.join(__dirname, '../src/*.jade'),
		data: path.join(__dirname, '../src/tpl/data/data.json'),
		dest: 'dist'
	},

	js: {
		src: path.join(__dirname, '../src/js/index.js'),
		target: 'scripts.js',
		dest: jsPath
	}
};
