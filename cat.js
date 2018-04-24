const fs = require('fs');
let pwd = require('./pwd.js');
module.exports = function(file) {
	fs.readFile(process.cwd() + '/' + file, 'utf8', (err, data) => {
		if (err) throw 'whatever';
		console.log(data);
        process.stdout.write('\nprompt > ');
	});
};
