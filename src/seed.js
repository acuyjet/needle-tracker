'use strict';

// Import Needle model
var Needle = require('./models/needle');

var needles = [
	{
		size: 'US 8',
		type: 'straight',
		material: 'bamboo',
		notes: 'Crystal Palace brand'
	}
];

needles.forEach(function(needle, index) {
	Needle.find({ 'size': needle }, function(err, needles) {
		if(!err && !needles.length) {
			Needle.create({ size: needle });
		}
	});
});