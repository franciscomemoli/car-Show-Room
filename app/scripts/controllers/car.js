'use strict';

/**
 * @ngdoc function
 * @name carShowRoomApp.controller:CarCtrl
 * @description
 * # CarCtrl
 * Controller of the carShowRoomApp
 */
angular.module('carShowRoomApp')
  .controller('CarCtrl', function ($scope,$modalInstance, car) {
    $scope.car = car;
    $scope.close = function(){
  		$modalInstance.close();
  	};
  });
