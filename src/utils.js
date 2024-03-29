const crossSpawn = require('cross-spawn');
const spawn = crossSpawn.sync;
const chalk = require('chalk');
const red = chalk.red;
const green = chalk.green;

function downloadByGit(callback, template) {
    console.log(green('start download'));
    console.log(`git@github.com:LiaoYingKai/${template}.git`);
    const result = spawn(
        'git',
        ['clone', `git@github.com:LiaoYingKai/${template}.git`],
        { stdio: 'inherit' }
    );
    const error = result.error;
    if (error) {
        console.log(red(error));
        return;
    }
    callback && callback();
}
const currentPath = process.cwd().replace(/\\/g, '/') + '/';


module.exports = {
    downloadByGit,
    currentPath,
};