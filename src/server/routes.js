var path = require('path');

module.exports = function (app, express) {
	app.get('/', (req, res) => {
	  res.sendFile(path.resolve(__dirname, '..', 'client', 'index.html'));
	}); 

	app.get('*', (req, res) => {
	  res.sendFile(path.resolve(__dirname, '..', 'client', 'index.html'));
	}); 
}
