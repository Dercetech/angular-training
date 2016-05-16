/* global angular */

'use strict';

angular.module('myApp').controller('OuterController',

	['$scope',

	function($scope) {
	    
	    var controller = this;

		////////////////////////////////////////////	    
	    // Expose functions and stuff //////////////

		// Dummy debug method
	    controller.doSomething = doSomething;
	    
	    // Show example panes
	    controller.showSections = {
	    	
	    	"outer"		: false,
	    	"outerBest"	: false,
	    	"directive"	: true
	    }
	    
	    // A primitive "aPrim" will be defined from the view
	    // purpose: show the adverse effects of directly placing prims on the scope
	    // $scope.aPrim = 123;
	    
	    // A primitive is wrapped in an object
	    $scope.scopeData = {
	    	
	    	// aPrim	: 123
	    }
	    
	    // Used in the directive demonstration
	    /*$scope.someData = {
	    	"name" : "Jem",
	    	"state": "hungry"
	    }*/
	    $scope.name = "Jem";
	    $scope.state = "hungry";
	    
	    // Mock data to iterate over
	    controller.stuff = [];
	    
	    // Expose functions ////////////////////////
		///////////////////////////////////////////


		////////////////////////////////////////////	    
	    // Init logic //////////////////////////////

		(function init(){
			
			// Create a list of objects to iterate over
			for(var i = 0; i < 5; i++){
				
				controller.stuff[i] = {
					"blah"	: (Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5))
				}
			}
		})();

	    // Init logic //////////////////////////////
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