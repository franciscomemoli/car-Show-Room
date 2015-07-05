'use strict';

/**
 * @ngdoc overview
 * @name carShowRoomApp
 * @description
 * # carShowRoomApp
 *
 * Main module of the application.
 */
angular
  .module('carShowRoomApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngTouch',
    'ui.bootstrap',
    'dialogs.main',
    'dialogs.default-translations'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
