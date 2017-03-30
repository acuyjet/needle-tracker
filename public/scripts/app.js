'use strict';

// Create Angular app
angular.module("needle-tracker", [])
		.controller('mainCtrl', function($scope) {
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
			}
		});