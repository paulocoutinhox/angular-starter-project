'use strict';

let path = require('path');
let webpack = require('webpack');

module.exports = {
	entry: require('./webpack/entry'),

	context: path.join(process.cwd(), 'src'),

	output: require('./webpack/output'),

	module: require('./webpack/module'),

	plugins: require('./webpack/plugins').concat([
		new webpack.LoaderOptionsPlugin({
			minimize: false,
			debug: true,
			options: {
				htmlLoader: {
					minimize: false,
					ignoreCustomFragments: [/\{\{.*?}}/],
					root: path.join(process.cwd(), 'src'),
					attrs: ['img:src', 'link:href']
				}
			}
		})
	]),

	resolve: require('./webpack/resolve'),

	devServer: require('./webpack/dev-server'),

	stats: 'errors-only',

	devtool: 'source-map'
};
