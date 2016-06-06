var path = require('path');
var webpack = require('webpack');

module.exports = {
	debug: true,
	output: {
		filename: "bundle.js",
	},
	resolve: {
		alias: {
			lodash: path.resolve( __dirname, './app/bower_components/lodash/lodash.custom.min.js'),
		}
	},
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.ProvidePlugin({
			_: "lodash",
		})
	],
	module: {
		loaders: [
			{ test: /\.css$/, loader: "style!css"},
//			{ test: /\.scss$/, loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"},
			{ test: /\.scss$/, loader: "style!css!sass"},
			{ test: /\.png$/, loader: "url-loader?limit=100000&mimetype=image/png" },
			{ test: /\.jpg$/, loader: "file-loader" },
		]
	},

};

/*
module.exports = {
	debug: true,
	entry: "./app/modules/index.js",
	output: {
		filename: "bundle.js",
	},
	module: {
		loaders: [
//			{ test: /\.html$/, loader: "ng-cache-loader" },
//			{ test: /\.html$/, loader: "html-loader" },
			{ test: /\.css$/, loader: "style!css"},
//			{ test: /\.scss$/, loader: "style-loader!css-loader!sass-loader?outputStyle=expanded&includePaths[]=" +  (path.resolve(__dirname, "./app/bower_components/foundation/scss/")) },
			{ test: /\.scss$/, loader: "style-loader!css-loader!autoprefixer-loader!sass-loader"},
			{ test: /\.png$/, loader: "url-loader?limit=100000&mimetype=image/png" },
			{ test: /\.jpg$/, loader: "file-loader" },
		]
	},
	resolve: {
		alias: {
			lodash: path.resolve( __dirname, './app/bower_components/lodash/lodash.custom.min.js'),
			models: path.resolve(__dirname, "./app/modules/common/models"),
		}
	},
	plugins: [
		new webpack.optimize.DedupePlugin(),
		new webpack.ProvidePlugin({
			_: "lodash",
		}),
//		new webpack.optimize.UglifyJsPlugin()				// uncomment for production
	]
};
*/
