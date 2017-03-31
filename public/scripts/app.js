'use strict';

// Create Angular app
angular.module("needle-tracker", [])
		.controller('mainCtrl', function($scope) {

			// $scope.sizes = [ 'US 00', 'US 0', 'US 1', 'US 1 1/2', 'US 2', 'US 2 1/2', 'US 3', 'US 4', 'US 5', 'US 6', 'US 7', 'US 8', 'US 9', 'US 10', 'US 10 1/2', 'US 11', 'US 13', 'US 15', 'US 17', 'US 19', 'US 35', 'US 50' ];

			$scope.needles = [
				{
					"size": "US 6",
					"type": "Straight",
					"material": "Wood",
					"notes": "10 in. Splintery and weird."
				},
				{
					"size": "US 0",
					"type": "Double-pointed",
					"material": "Bamboo",
					"notes": "Crystal Palace brand. Great for socks!"
				},
				{
					"size": "US 2",
					"type": "Circular",
					"material": "Metal",
					"notes": "Addi Turbo brand, 10 in."
				},
				{
					"size": "US 9",
					"type": "Straight",
					"material": "Bamboo",
					"notes": "Crystal Palace brand, 14 in."
				}
			];

			$scope.addNeedle = function() {
				console.log('Needle added to list!');
			};

			$scope.needleList = function() {
				console.log('A list of needles!');
			};

			$scope.editNeedle = function() {
				console.log('Edited a needle!')
			};

			$scope.deleteNeedle = function() {
				console.log('Needle deleted!');
			};
		});