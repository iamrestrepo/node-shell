let importedFilesFromPWD =  require('./pwd.js'); 


process.stdout.write('prompt > ');

process.stdin.on('data', data => {
	const cmd = data.toString().trim();

	if (cmd === 'pwd') {
		importedFilesFromPWD(); 
	} else {
		process.stdout.write('what  you typed: ' + cmd);
	}
	process.stdout.write('\nprompt > ');
});
