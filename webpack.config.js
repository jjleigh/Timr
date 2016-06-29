'use strict';

let path = require('path');
let webpack = require('webpack');

const buildDirectory = './dist/';

const PATH = (p) => path.resolve(__dirname, p || '');

const COMMON = {
	context: PATH('app'),
	entry: {
		app: ['babel-polyfill', './timr.js']
	},
	output: {
		filename: 'bundle.js',
		path: PATH('public')
	},
	module: {
		loaders: [{
			test: /\.jsx?$/,
      		exclude: /(node_modules|bower_components)/,
      		loader: 'babel'
		}, {
			test: /\.css$/,
			loaders: ['style', 'css', 'postcss']
		}, {

        	test: /\.less$/,
        	loader: "style!css!less"
      	}]
	},
	resolve: {
		extensions: ["", ".css", ".js", ".jsx", ".less"],
		"root": __dirname
	},
	postcss: (webpack) => {
		return [
			require("postcss-import")({ addDependencyTo: webpack }),
			require("postcss-url")(),
			require('postcss-cssnext')()
		]
	},
	debug: true,
	devtool: 'cheap-source-map',
	devServer: {
		contentBase: PATH('public'),
		hot: true,
		inline: true,
		stats: 'error-only',
		port: 7700
	}
}

module.exports = COMMON;
