'use strict';

let path = require('path');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
	rules: [
		{
			test: /\.ts$/,
			use: '@ngtools/webpack'
		},
		{
			test: /\.html$/,
			use: 'html-loader'
		},
		{
			test: /\.css$/,
			include: path.resolve(process.cwd(), 'src', 'app'),
			loaders: ['to-string-loader', 'css-loader']
		},
		{
			test: /\.css$/,
			exclude: path.resolve(process.cwd(), 'src', 'app'),
			loader: ExtractTextPlugin.extract({
				fallbackLoader: 'style-loader',
				loader: 'css-loader'
			})
		},
		{
			test: /\.svg$/,
			use: 'url-loader?limit=150000&mimetype=image/svg+xml&name=assets/fonts/[name].[ext]'
		},
		{
			test: /\.woff$/,
			use: 'url-loader?limit=65000&mimetype=application/font-woff&name=assets/fonts/[name].[ext]'
		},
		{
			test: /\.woff2$/,
			use: 'url-loader?limit=65000&mimetype=application/font-woff2&name=assets/fonts/[name].[ext]'
		},
		{
			test: /\.[ot]tf$/,
			use: 'url-loader?limit=65000&mimetype=application/octet-stream&name=assets/fonts/[name].[ext]'
		},
		{
			test: /\.eot$/,
			use: 'url-loader?limit=65000&mimetype=application/vnd.ms-fontobject&name=assets/fonts/[name].[ext]'
		},
		{
			test: /\.(png|jpeg|jpg|gif|ico)$/,
			use: 'file-loader?name=assets/images/[name].[ext]'
		}
	]
};