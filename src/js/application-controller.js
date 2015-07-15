(function() {
    'use strict';

    angular.module('hello')
      .controller('AppController', AppController);

    /** 
     * Main Controller JavaScript Constructor for the application.
     **/
    function AppController() {

        //Saving the this reference
        var ac = this;

        //Adding a property to the Controller instance
        ac.place = 'World';
    }


    ///////////////////////////////////////
    /**
     * Controller-as syntax is a newer syntax to Angular.
     *   Some Angular applications rely heavily on $scope instead.
     *
     *   The move to controller-as syntax will help in the transition
     *      to Angular 2.0
     *
     *   Below is how the above is done utilizing $scope instead of
     *     controller-as syntax
     */
    //angular.module('hello')
    //    //$scope is being Dependency Injected into the Constructor
    //    .controller('AppController', ['$scope', AppController]);
    //
    //function AppController($scope) {
    //    //Within the index.html we would reference this variable simply
    //    //  as place rather than ac.place because the $scope is the
    //    //  glue between the view and the controller
    //    $scope.place = 'World';
    //}

})();