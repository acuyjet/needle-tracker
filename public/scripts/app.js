'use strict';

// Create Angular app
angular.module("needle-tracker", [])
		.controller('mainCtrl', function($scope, dataService) {

			// $scope.addNeedle = function() {
			// 	console.log('Needle added to list!');
			// };

			// $scope.getNeedles = function() {
			// 	console.log('A list of needles!');
			// };

			// $scope.editNeedle = function() {
			// 	console.log('Edited a needle!')
			// };

			// $scope.deleteNeedle = function() {
			// 	console.log('Needle deleted!');
			// };

			// Get list of needles
			dataService.getNeedles(function(response) {
				console.log(response.data);
				$scope.needles = response.data;
			});

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
