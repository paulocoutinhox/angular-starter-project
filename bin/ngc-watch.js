'use strict';

let path = require('path');
let childProcess = require('child_process');
let chokidar = require('chokidar');

let ngcCommand = 'npm run ngc';

chokidar.watch(
	[
		'src/**/*.ts',
		'src/**/*.html',
		'src/**/*.css'
	],
	{
		ignoreInitial: true
	}
).on('all', () => {
	console.log("\n> Recompiling...");
	childProcess.execSync(ngcCommand, {
		encoding: 'utf8',
		cwd: process.cwd()
	});
	console.log("\n> Finished");
});
