exports.config = {
	framework: 'jasmine',
	specs: ['../../tests/e2e/**/*.spec.js'],
	useAllAngular2AppRoots: true,
	directConnect: true,
	allScriptsTimeout: 80000,
	capabilities: {
		'browserName': 'chrome'
	},
	jasmineNodeOpts: {
		showColors: true,
		defaultTimeoutInterval: 80000
	}
};