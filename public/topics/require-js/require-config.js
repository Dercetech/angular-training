/* globals requirejs */
/* globals angular */

'use strict';

// Relative paths
var bower = "./bower_components/";

require.config({

    baseUrl: 'lib',
    
    // Paths are relative to baseURL
    paths: {
        
        // Actual app
        app: '../app/',
        
        // Bower root
        bwr: bower,
        
        // Angular
        ng: bower + 'angular/',
        
        // Dummy dependencies
        test: '_test/'
    },
    
    shim: {
        
        'ng/angular.min':{
          
          exports: 'angular'  
        },
        
        'app/main':{
            
            // Angular *must* be loaded first or else defining modules will fail (it is load-order dependent)
            // rem: RequireJS doesn't provide load order
            
            deps: ['ng/angular.min'],
            
            // Load the app's files once angular is ready
            init:function(){
                
                // 1. Begin with top-level modules
                require([
                    
                    // Commons: directives (widgets)
                    'app/commons/commons',
                    
                    // Modules: your app's modules
                    'app/modules/modules',
                    
                    // Proceed with next step
                    ], loadApp);
                
                // 2. Load your app files
                function loadApp(){
                    
                    // Define the rest of your Angular files here
                    require([
                        
                        'app/modules/dashboard/dashboard-controller'
                    
                    // Proceed with next step
                    ], onModulesLoaded);
                }
                
                // 3. Boot your app
                function onModulesLoaded(){
                    
                    // See: http://www.bennadel.com/blog/2553-loading-angularjs-components-after-your-application-has-been-bootstrapped.htm
                    angular.bootstrap(document, ['myApp']);
                }
            }
        }
    }
});

require(['app/main']);