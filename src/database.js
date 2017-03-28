'use strict';

var mongoose = require('mongoose');

// Connect to database
mongoose.connect('mongodb://localhost/needle-tracker', function(err) {
	if(err) {
		console.log('Connection to database failed!');
	} else {
		console.log('Database connection successful');
	}
});