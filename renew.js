#!/usr/bin/env node

const exec = require('child_process').exec;
const path = require('path');
const dir = __dirname;
const projName = path.resolve(dir, process.argv[2]) + '/';
console.log(projName);

const cmd = [
	'git checkout-index -f -a --prefix=' + projName,
	'cp ./.gitignore ' + projName,
	'rm ' + projName + 'renew.js'

]


const child = exec(cmd.join('&&'), {
	cwd: dir
});
