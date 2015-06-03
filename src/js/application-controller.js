(function() {
    'use strict';

    angular.module('hello')
      .controller('AppController', AppController);

    /** 
     * Controller for the application.
     **/
    function AppController() {

        //Saving the this reference
        var ap = this;

        ap.place = 'World';
    }

})();