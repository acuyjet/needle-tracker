'use strict';

// Create Angular app
angular.module("needle-tracker", [])
		.controller('mainCtrl', function($scope, dataService) {

			$scope.addNeedle = function() {
				console.log('Needle added to list!');
			};

			$scope.getNeedles = function() {
				console.log('A list of needles!');
			};

			$scope.editNeedle = function() {
				console.log('Edited a needle!')
			};

			$scope.deleteNeedle = function() {
				console.log('Needle deleted!');
			};

			dataService.getNeedles(function(response) {
				console.log(response.data);
				$scope.needles = response.data;
			});
		})

		.service('dataService', function($http) {
			// Add a needle
			this.addNeedle = function() {
				console.log('Hello, world!');
			};

			// Get list of needles
			this.getNeedles = function(callback) {
				$http.get('mock/needles.json')
						.then(callback)
			};
		});
