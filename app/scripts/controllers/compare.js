'use strict';

/**
 * @ngdoc function
 * @name carShowRoomApp.controller:CompareCtrl
 * @description
 * # CompareCtrl
 * Controller of the carShowRoomApp
 */
angular.module('carShowRoomApp')
  .controller('CompareCtrl', function ($scope, $modalInstance,items) {
  	$scope.cars = items;
  	$scope.close = function(){
  		$modalInstance.close();
  	};
  });
