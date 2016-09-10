///// REQUIRE BASIC EXPRESS MIDDLEWARE /////////
var express = require('express'); 
var path = require('path');
var bodyParser = require('body-parser'); 

///// INITIALIZE SERVER ////////////////////////
var app = express(); 
app.set('port', 3000); 


///// SETUP DATABASE ////////////////////////
var mongoose = require('mongoose'); 
var localDatabase = 'database'; // Change this variable per project
mongoose.connect('mongodb://localhost/' + localDatabase); 
mongoose.connection.on('error', function() {
  console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});


//// EXPRESS MIDDLEWARE /////////////////
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.resolve(__dirname, '..', 'client')));

///// ROUTING /////////////////////////////
require('./routes.js')(app, express);

app.listen(3000);
console.log('React Stack Starter Server is listening on: 3000'); 