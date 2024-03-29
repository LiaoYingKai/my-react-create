#!/usr/bin/env node

const commander = require('commander');
const chalk = require('chalk');
const packageJson = require('./package.json');
const excute = require('./src/index');
const tempIndex = {
	react: 'react_init',
}

let projectName;
let templateName;
const program = new commander.Command(packageJson.name)
	.version('v' + packageJson.version, '-v, --version')
	.arguments('<templateName>')
	.arguments('<projectName>')
	.alias('cp')
	.description('create-doddle react myProject')
	.action(function (index, name) {
		inputIndex = index;
	  // 允许目标项目名和要复制的模板类型名顺序颠倒
		if (tempIndex[index] || tempIndex[name]) {
			if (tempIndex[index]) {
				templateName = tempIndex[index];
				projectName = name;
			} else {
				templateName = tempIndex[name];
				projectName = index;
			}
		}
		if (program.directly) {
			templateName = index;
		}
	});
program.parse(process.argv)

if (program.args.length === 0) {
	console.log(chalk.red('syntax error'));
	program.help()
}

if (templateName) {
	excute(templateName, projectName, program.force);
} else {
	console.log(`the template ${inputIndex} you want download do not exist`);
}
