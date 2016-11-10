'use strict';

module.exports = {
	contentBase: './src',
	port: 9000,
	inline: true,
	historyApiFallback: true,
	stats: 'errors-only',
	watchOptions: {
		aggregateTimeout: 300,
		poll: 500
	},
	proxy: {
		'/api': {
			target: 'http://localhost:8080/api',
			secure: false,
			pathRewrite: {'^/api': ''}
		}
	},
};
