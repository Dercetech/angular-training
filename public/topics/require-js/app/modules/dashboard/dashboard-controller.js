/* global angular */

'use strict';

angular.module('dashboard').controller('DashboardController',

	['$scope',

	function($scope) {
	    
	    var controller = this;

		////////////////////////////////////////////	    
	    // Expose functions ////////////////////////

	    controller.doSomething = doSomething;
	    
	    // Expose functions ////////////////////////
		///////////////////////////////////////////
	    
	    
		////////////////////////////////////////////	    
	    // Logic implementaiton ////////////////////
	    
	   function doSomething(){
	        
	        return "very nifty";
	    }
	    
	    // Logic implementaiton ////////////////////
		///////////////////////////////////////////	    
	}]
);