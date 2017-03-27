'use strict';

var express = require('express');
var Activity = require('../models/activity');
//var entries = require('../../mock/activities.json'); // Mock data

var router = express.Router();

// GET route for activity entries
router.get('/activities', function(req, res) {
	Activity.find({}, function(err, activities){
		if(err) {
			res.status(500).json({ message: err.message });
		}
		res.json({activities:activities});
	});

});

// GET route for leaderboard
router.get('/leaderboard', function(req, res) {
	res.send('Leaderboard goes here');
});

// TODO: Add POST route for new activities

// TODO: Add PUT route to update activities

// TODO: Add DELETE route to delete activities

module.exports = router;