(function() {
'use strict';

    angular
      .module('nearbyrestaurants', [
        'ui.router'
      ]).config(['$stateProvider','$rootScopeProvider','$urlRouterProvider', function ($stateProvider, $rootScopeProvider, $urlRouterProvider) {
            $urlRouterProvider.otherwise('/');
            $stateProvider
                    .state('main', {
                        url: '/',
                        templateUrl: 'views/main.html',
                        controller: 'mainController'
                    });
      }]);


})();
