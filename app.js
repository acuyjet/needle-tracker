'use strict';

var express = require('express');
var app = express();
var router = express.Router();

// Serve static files
app.use('/', express.static('public'));

// GET route for activity entries
router.get('/entries', function(req, res) {
	res.json({entries:[]});
});

// GET route for leaderboard
router.get('/leaderboard', function(req, res) {
	res.json({leaderboard:[]});
});

// TODO: Add POST route for new entries

// TODO: Add PUT route to update entries

// TODO: Add DELETE route to delete entries

app.use('/api', router);

// Configure app to listen to requests on port 3000
app.listen(3000, function() {
	console.log('Listening on port 3000');
});