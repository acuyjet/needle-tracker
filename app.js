'use strict';

var express = require('express');
var router = require('./src/api/index');
var app = express();

// Serve static files
app.use('/', express.static('public'));

app.use('/api', router);

// Configure app to listen to requests on port 3000
app.listen(3000, function() {
	console.log('Listening on port 3000');
});