'use strict';

let path = require('path');
let webpack = require('webpack');

let ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = {
	entry: require('./webpack/entry'),

	context: path.join(process.cwd(), 'src'),

	output: require('./webpack/output'),

	module: require('./webpack/module'),

	plugins: require('./webpack/plugins').concat([
		new webpack.LoaderOptionsPlugin({
			minimize: true,
			debug: false,
			options: {
				htmlLoader: {
					minimize: false,
					ignoreCustomFragments: [/\{\{.*?}}/],
					root: path.join(process.cwd(), 'src'),
					attrs: ['img:src', 'link:href']
				}
			}
		}),
		new webpack.DefinePlugin({
			'process.env': {
				'ENV': JSON.stringify(ENV)
			}
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: ['bootstrap', 'vendor', 'polyfills'],
			minChunks: Infinity
		}),
		new webpack.optimize.UglifyJsPlugin({
			mangle: {
				keep_fnames: true
			},
			compress: {
				warnings: false
			},
			output: {
				comments: false
			},
			sourceMap: false
		})
	]),

	resolve: require('./webpack/resolve'),

	stats: 'errors-only',

	devtool: false
};
