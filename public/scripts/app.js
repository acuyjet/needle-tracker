'use strict';

// Create Angular app
angular.module("needle-tracker", [])
		.controller('mainCtrl', function($scope, dataService) {

			// Get list of needles
			dataService.getNeedles(function(response) {
				console.log(response.data);
				$scope.needles = response.data;
			});

			// Add a needle
			$scope.addNeedle = function() {
				var needle = {
					size: 'US 11',
					type: 'Double-pointed',
					material: 'Plastic',
					notes: 'Don\'t use these for much'
				}
				$scope.needles.push(needle);
			};

			// Save a needle
			$scope.saveNeedle = function(needle) {
				dataService.saveNeedle(needle);
			};

			// Delete needle and remove from list
			$scope.deleteNeedle = function(needle, $index) {
				dataService.deleteNeedle(needle);
				$scope.needles.splice($index, 1);
			};
		})

		.service('dataService', function($http) {
			// Get list of needles
			this.getNeedles = function(callback) {
				$http.get('mock/needles.json')
						.then(callback)
			};

			// Save a needle
			this.saveNeedle = function(needle) {
				console.log(needle + ' has been saved!');
				// DB logic goes here
			};

			// Delete a needle
			this.deleteNeedle = function(needle) {
				console.log(needle.size + '/' + needle.type + '/' + needle.material + ' has been deleted!');
				// DB logic goes here
			};
		});
