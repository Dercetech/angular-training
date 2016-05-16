/* global angular */

'use strict';

// Define your app
var app = angular.module('myApp', [/* no dependencies to inject */]);

// On app started
app.run(['$rootScope', function($rootScope){
	console.log('> application ready');
}]);