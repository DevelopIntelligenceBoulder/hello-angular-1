(function() {
	'use strict';

	/**
	 * Hello directive for displaying Hello World.
	 **/
    angular.module('hello')
      .directive('diHello', diHello);

    function diHello() {
    	//Directive definition object
    	return {
    		restrict: 'EA',
    		scope: {
    			place: '@'
    		},
    		template: '<h1>Hello {{place}}</h1>'
    	};
    } 

})();