'use strict';

var mongoose = require('mongoose');

// Create Mongoose schema
var needleSchema = new mongoose.Schema({
	size: String,
	type: String,
	material: String,
	notes: String
});

// Create needle model
var model = mongoose.model('Needle', needleSchema);

module.exports = model;