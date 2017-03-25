'use strict';

var express = require('express');
var app = express();

// Serve static files
app.use('/', express.static('public'));

// Configure app to listen to requests on port 3000
app.listen(3000, function() {
	console.log('Listening on port 3000');
});