/* global angular*/

'use strict';

var myMainModule = angular.module('myApp');


// 1: use the parent scope
myMainModule.directive('useParentScope', [/*no dependencies, */

    function(/*no dependencies*/) {
  
        var directiveDefinitionObject = {
            
            restrict: 'A',
            scope: false,
            templateUrl: 'app/directive-views/parent-scope.html'
        };
        
        return directiveDefinitionObject;
    }
]);

// 2: use the parent scope
myMainModule.directive('useChildScope', [/*no dependencies, */

    function(/*no dependencies*/) {
  
        var directiveDefinitionObject = {
            
            restrict: 'A',
            scope: true,
            templateUrl: 'app/directive-views/child-scope.html'
        };
        
        return directiveDefinitionObject;
    }
]);

// 3: use an isolated scope
myMainModule.directive('useIsolatedScope', [/*no dependencies, */

    function(/*no dependencies*/) {
  
        var directiveDefinitionObject = {
            
            restrict: 'A',
            scope: {
                
                "aMessage": "@"
            },
            templateUrl: 'app/directive-views/isolated-scope.html'
        };
        
        return directiveDefinitionObject;
    }
]);


// 4: use a transcluded scope
myMainModule.directive('useTranscludedScope', [/*no dependencies, */

    function(/*no dependencies*/) {
  
        var directiveDefinitionObject = {
            
            restrict: 'A',
            scope: false, // change me!
            transclude: true,
            
            templateUrl: 'app/directive-views/transcluded-scope.html'
        };
        
        return directiveDefinitionObject;
    }
]);