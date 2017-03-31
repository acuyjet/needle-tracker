'use strict';

// Import Needle model
var Needle = require('./needle.model.js');

var needles = [
	{
		size: 'US 1',
		type: 'Double-pointed',
		material: 'Metal',
		notes: 'Best for socks'
	},
	{
		size: 'US 7',
		type: 'Straight',
		material: 'Bamboo',
		notes: 'Crystal Palace brand'
	},
	{
		size: 'US 8',
		type: 'Circular',
		material: 'Wood',
		notes: '16 in.'
	}
];

Needle.count({}, function(err, count) {
	if(err) {
		throw err;
	}
	if (count > 0) return;
	Needle.create(needles, function(err, newNeedles) {
		if(err) {
			throw err;
		}
		console.log('Database seeded!');
	})
});