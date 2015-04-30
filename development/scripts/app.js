'use strict';
angular
  .module('nearbyrestaurants', [
    'ui.router'
  ]).config(['$stateProvider','$rootScopeProvider','$urlRouterProvider', function ($stateProvider, $rootScopeProvider, $urlRouterProvider) {
        $rootScopeProvider.digestTtl(100);
        $urlRouterProvider.otherwise('/');
        $stateProvider
                .state('main', {
                    url: '/',
                    templateUrl: 'views/main.html',
                    resolve: {
                    }
                })
                .state('hospitals', {
                    url: '/hospitals',
                    templateUrl: 'views/hospitals.html',
                    resolve: {
                    }
                });
  }]);
