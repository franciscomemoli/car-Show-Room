'use strict';

/**
 * @ngdoc function
 * @name carShowRoomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the carShowRoomApp
 */
angular.module('carShowRoomApp')
  .controller('MainCtrl', function ($scope,carService) {
    $scope.cars = [];
    $scope.loadHome = function (){
    	var promise = carService.getAll();
    	promise.then(function(data) {
			$scope.cars = data;
	        }, function(error) {
	            console.log('error');
	        });
    };
  });
