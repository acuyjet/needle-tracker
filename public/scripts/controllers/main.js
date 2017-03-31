'use strict';

angular.module('needle-tracker')
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
			};
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
	});
