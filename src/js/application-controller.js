(function() {
    'use strict';

    angular.module('hello')
      .controller('AppController', AppController);

    /** 
     * Main Controller for the application.
     **/
    function AppController() {

        //Saving the this reference
        var ap = this;

        //Adding a property to the Controller instance
        ap.place = 'World';
    }

})();