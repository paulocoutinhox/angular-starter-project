var SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {
	useAllAngular2AppRoots: true,
	directConnect: true,
	allScriptsTimeout: 30000,
	getPageTimeout: 30000,
	browserName: 'chrome',
	framework: 'jasmine',
	baseUrl: 'http://localhost:9000/',
	specs: ['../../tests/e2e/**/*.spec.js'],
	capabilities: {
		'browserName': 'chrome'
	},
	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 30000,
		print: function () { }
	},
	onPrepare: function () {
		jasmine.getEnv().addReporter(new SpecReporter());
	}
};