'use strict';

var mongoose = require('mongoose');

// Create Mongoose schema
var activitySchema = new mongoose.Schema({
	name: String,
	department: String,
	type: String,
	date: Date,
	duration: Number
});

// Create activity model
var model = mongoose.model('Activity', activitySchema);

module.exports = model;