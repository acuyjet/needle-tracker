'use strict';

angular.module('needle-tracker' )
	.directive('needles', function() {
		return {
			templateUrl: 'templates/needles.html',
			controller: 'mainCtrl'
		}
	});