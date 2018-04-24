let importedFilesFromPWD = require('./pwd.js');
let importedFilesFromLS = require('./ls.js');
let importedFilesFromCAT = require('./cat.js');
process.stdout.write('prompt > ');
process.stdin.on('data', data => {
	const cmd = data.toString().trim();
	if (cmd === 'pwd') {
		importedFilesFromPWD();
	} else if (cmd === 'ls') {
		importedFilesFromLS();
	} else if (cmd.split(' ')[0] === 'cat') {
		importedFilesFromCAT(cmd.split(' ')[1]);
	} else {
		process.stdout.write('what you typed: ' + cmd);
	}
	process.stdout.write('\nprompt > ');
});
