/* global angular */

'use strict';

angular.module('dashboard').controller('DashboardController',

	['$scope',

	function($scope) {
	    
	    var controller = this;

		controller.doSomething = doSomething;
	    
		function doSomething(){
	        
	        return "very nifty";
	    }
	}]
);

