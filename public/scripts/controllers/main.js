'use strict';

angular.module('needle-tracker')
	.controller('mainCtrl', function($scope, $http, dataService) {

		// Get list of needles
		dataService.getNeedles(function(response) {
			var needles = response.data.needles;
			$scope.needles = needles;
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
			// $scope.getNeedles();
		};

		// Delete needle and remove from list
		$scope.deleteNeedle = function(needle, $index) {
			dataService.deleteNeedle(needle);
			$scope.needles.splice($index, 1);
		};
	});
