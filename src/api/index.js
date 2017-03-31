'use strict';

var express = require('express');
var Needle = require('../models/needle.model');
//var needles = require('../../mock/needles.json'); // Mock data

var router = express.Router();

// GET route for needles
router.get('/needles', function(req, res) {
	Needle.find({}, function(err, needles){
		if(err) {
			return res.status(500).json({ message: err.message });
		}
		res.json({ needles: needles });
	});

});

// TODO: Add POST route for new needles

// TODO: Add PUT route to update existing needles

// TODO: Add DELETE route to delete needles

module.exports = router;