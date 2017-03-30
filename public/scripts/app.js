'use strict';

// Create Angular app
angular.module("needle-tracker", [])
		.controller('mainCtrl', function($scope) {

			// $scope.sizes = [ 'US 00', 'US 0', 'US 1', 'US 1 1/2', 'US 2', 'US 2 1/2', 'US 3', 'US 4', 'US 5', 'US 6', 'US 7', 'US 8', 'US 9', 'US 10', 'US 10 1/2', 'US 11', 'US 13', 'US 15', 'US 17', 'US 19', 'US 35', 'US 50' ];

			$scope.needles = [
				{

				}
			];

			$scope.saveForm = function() {
				console.log('Form saved!');
			};

			$scope.needleList = function() {
				console.log('A list of needles!');
			};

			$scope.editNeedle = function() {
				console.log('Editing a needle!')
			};

			$scope.deleteNeedle = function() {
				console.log('Needle deleted!');
			};
		});