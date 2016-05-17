/* global angular */

'use strict';

// Define your app
var app = angular.module('myApp', [

  // Declare the modules to inject in your app
  'dashboard'
]);

// On app started
app.run(['$rootScope', function($rootScope){
	
	console.log('> application ready');
}]);