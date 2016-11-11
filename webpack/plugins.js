'use strict';

let webpack = require('webpack');
let ngtools = require('@ngtools/webpack');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

let path = require('path');

module.exports = [
	new webpack.ProgressPlugin(),
	new ngtools.AotPlugin({
		tsConfigPath: './tsconfig.json',
		baseDir: path.join(process.cwd(), 'src'),
		entryModule: path.join(process.cwd(), 'src', 'app', 'modules', 'app.module') + '#AppModule'
	}),
	new webpack.ContextReplacementPlugin(
		/angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
		path.join(process.cwd(), 'src')
	),
	new CopyWebpackPlugin([
		{from: 'static/index.html'},
		{from: 'static/icons/favicon.ico'},
		{from: 'static/icons/favicon.png'}
	]),
	new ExtractTextPlugin('[name].bundle.css'),
	new webpack.ProvidePlugin({
		jQuery: 'jquery',
		$: 'jquery',
		jquery: 'jquery'
	})
];
