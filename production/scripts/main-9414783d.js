"use strict";angular.module("nearbyrestaurants",["ngMessages","ngResource","ngSanitize","ngTouch","ui.router"]).config(["$stateProvider","$rootScopeProvider","$urlRouterProvider",function(e,t,r){t.digestTtl(100),r.otherwise("/"),e.state("main",{url:"/",templateUrl:"views/main.html",resolve:{}}).state("hospitals",{url:"/hospitals",templateUrl:"views/hospitals.html",resolve:{}})}]);