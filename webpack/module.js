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
			test: /\.(woff|woff2)$/,
			loader: 'url-loader?name=assets/[name].[ext]&limit=10000&mimetype=application/font-woff'
		},
		{
			test: /\.(png|jpeg|jpg|gif|svg|woff|woff2|ttf|eot|ico)$/,
			loader: 'file-loader?name=assets/[name].[ext]'
		}
	]
};
