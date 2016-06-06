var gulp = require('gulp');
var gulpWebpack = require('webpack-stream');
var webpack = require('webpack');
var $ = require('gulp-load-plugins')();
var inlinesource = require('gulp-inline-source');
var htmlreplace = require('gulp-html-replace');
var history = require('connect-history-api-fallback');

var devConfig = require('./dev.config.js');

// fire up the connect middleware to plug into the server
gulp.task('connect', function () {
	var connect = require('connect');
	var app = connect()
		.use(require('connect-livereload')({ port: 35729 }))
		.use(history())
		.use(connect.static('dist'))
		.use(connect.directory('dist'));

	require('http').createServer(app)
		.listen(9000)
		.on('listening', function () {
			console.log('Started connect web server on http://localhost:9000');
		});
});

// start the server
gulp.task('serve', ['connect'], function () {
	require('opn')('http://localhost:9000');
});

gulp.task('watch', ['connect', 'serve'], function () {
	var server = $.livereload();

	// watch for changes
	gulp.watch([
		'dist/bundle.js',			
		'dist/index.html',
		'dist/opt_out.html',
	]).on('change', function (file) {
		console.log(file.path + " changed");
		server.changed(file.path);
	});

	// run webpack whenever the source files changes
	gulp.watch('app/modules/**/*', ['webpack', 'html']);
	gulp.watch(['app/index.html', 'app/opt_out.html'], ['html']);
	gulp.watch('app/images/*', ['images']);
});

// for development
gulp.task("webpack", function(callback) {
	console.log('running webpack');

	return gulp.src('app/modules/index.js')
	.pipe( gulpWebpack(devConfig, webpack, function(err, stats) {
		if (stats.compilation.errors && stats.compilation.errors.length) {
			$.util.log($.util.colors.red(stats.compilation.errors[0]));
		} else {
			$.util.log($.util.colors.green( stats.compilation.chunks.length-1 + ' chunks & 1 main bundle emitted'));
		}
	}))
	.pipe(gulp.dest('dist/'));
});

gulp.task("html", function() {
	return gulp.src('app/*.html')
	.pipe(gulp.dest('dist/'));
});

// for production ========
gulp.task( 'uglify', ['webpack'], function() {
	return gulp.src('dist/*bundle.js')
	.pipe($.uglify())
	.pipe( gulp.dest('dist/'));
});

gulp.task("inlineScripts", ['uglify'], function() {
	return gulp.src('dist/index.html')
	.pipe( $.inlineSource({swallowErrors: false, compress: false}) )
	.pipe( gulp.dest('dist/') )
	.pipe( $.size() );	
});

gulp.task("build", ['inlineScripts'], function() {
});

//=====================

gulp.task("images", function() {
	return gulp.src('app/images/**/*')
	.pipe( $.imagemin({
		optimizationLevel: 7
	}))
	.pipe(gulp.dest('dist/images'))
});

gulp.task("vendor", function() {
	return gulp.src([
        	'app/bower_components/angular-ui-router/release/angular-ui-router.min.js',
		'app/bower_components/angular/angular.min.js',
		'app/bower_components/angular-animate/angular-animate.min.js',
		'app/bower_components/angular-sanitize/angular-sanitize.min.js',
		'app/bower_components/oclazyload/dist/ocLazyLoad.min.js'
	])
	.pipe( $.order([
		'angular/angular.min.js',
        	'angular-ui-router/release/angular-ui-router.min.js',
		'angular-animate/angular-animate.min.js',
		'angular-sanitize/angular-sanitize.min.js',
		'oclazyload/dist/ocLazyLoad.min.js',
	], {base: './app/bower_components'}))
	.pipe( $.concat('vendor.js'))
	.pipe( $.size() )
	.pipe(gulp.dest('dist/'))
});

