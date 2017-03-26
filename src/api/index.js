'use strict';

var express = require('express');
var entries = require('../../mock/entries.json'); // Mock data
var router = express.Router();

// GET route for activity entries
router.get('/entries', function(req, res) {
	res.json({entries:entries});
});

// GET route for leaderboard
router.get('/leaderboard', function(req, res) {
	res.send('Leaderboard goes here');
});

// TODO: Add POST route for new entries

// TODO: Add PUT route to update entries

// TODO: Add DELETE route to delete entries

module.exports = router;