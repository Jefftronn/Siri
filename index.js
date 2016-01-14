var express = require('express');
var bodyParser = require('body-parser')

var app = express();

var port = 8887;

app.use(bodyParser.json());

app.listen(port, function () {
	console.log('listening on port ' + port)
});

var messages = ["Does not compute", "Hello there.", "I'm sorry, I cannot take any requests at this time.", "I can tell you how to do that.", "I Love Pizza", "I will always be there", "Maybe", "Yes", "No", "I absolutely will not", "How dare you!", "I will not answer that", "Possibly"];

app.get('/', function ( req, res ) {
	res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send(JSON.stringify({
		message: getRandomMessage()
	}));
});

var getRandomMessage = function(arry) {
	var numberArry = Math.floor(Math.random() * messages.length);
	return messages[numberArry];
};

app.options('/', function(req, res) {
  res.status(200).set({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET, POST',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
    'X-XSS-Protection': '1; mode=block',
    'X-Frame-Options': 'SAMEORIGIN',
    'Content-Security-Policy': "default-src 'self' devmountain.github.io"
  }).send();
});