'use strict';

var router = require('express').Router();
var mongoose = require('mongoose');
var Needles = require('../models/needle.model');


// Get needles
router.get('/', (req, res) => {
	res.render('index');
});

//Create new needle
router.post('/api', (req, res) => {
	var needle = req.body;
	Needles.create(needle, (err, needle) => {
		if(err) {
			return res.status(500).json({message: err.message});
		} else {
			res.json({'needle': needle, message: needle.size + '/' + needle.type + '/' + needle.material + ' created!'});
		}
	});
});

// Get list of needles
router.get('/api', (req, res) => {
	Needles.find( (err, needle) => {
		if(err) {
			return res.status(500).json({message: err.message});
		} else {
			res.json(needle);
		}
	});
});

// Update existing needle
router.put('/api/:id', (req, res) => {
	var id = req.params.id;
	var needle = req.body;
	if(needle && needle._id !== id) {
		return res.status(500).json({err: 'IDs do not match!'});
	} else {
		Needles.findByIdAndUpdate(id, needle, {new: true}, function(err, needle) {
			if(err) {
				return res.status(500).json({message: err.message});
			} else {
				res.json({'needle': needle, message: needle.size + '/' + needle.type + '/' + needle.material + ' updated!'});
			}
		});
	}
});

// Delete a needle
router.delete('/api/:id', function(req, res) {
	var id = req.params.id;
	Needles.remove({'_id': id}, function(err, needle) {
		if(err) {
			return res.status(500).json({message: err.message});
		}
		res.send({'needle': needle, message: 'Needle deleted!'});
	});
});

module.exports = router;