const fs = require('fs');

module.exports = {
	getTemplate: (path) => {
		// Todo, add token replacement for variables such as date and time
		return JSON.parse(fs.readFileSync(path, 'utf-8'));
	}
}
