'use strict';

angular.module('needle-tracker')
	.service('dataService', function($http) {

		// Get list of needles
		this.getNeedles = function(callback) {
			$http.get('api/needles')
					.then(callback)
		};

		// Save a needle
		this.saveNeedle = function(needle, callback) {
			if(!needle._id) {
				$http.post('/api/needles, person')
						.then(callback);
			} else {
				$http.put('/api/needles/' + needle._id, needle)
						.then(callback);
			}
		};

		// Delete a needle
		this.deleteNeedle = function(needle) {
			console.log(needle.size + '/' + needle.type + '/' + needle.material + ' has been deleted!');
			// DB logic goes here
		};
	});
