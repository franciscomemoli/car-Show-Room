'use strict';

/**
 * @ngdoc function
 * @name carShowRoomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the carShowRoomApp
 */
angular.module('carShowRoomApp')
  .controller('MainCtrl', function ($scope,carService,$timeout) {
    $scope.cars = [];
    $scope.loadHome = function (){
    	var promise = carService.getAll();
    	promise.then(function(data) {
			$scope.cars = data;
	        }, function(error) {
	            console.log('error');
	        });

    $scope.searchText = '';
    $scope.searchTextApplied = '';
    var filterTextTimeout;
    $scope.$watch('searchText', function (newValue, oldValue) {
        if (filterTextTimeout){
        	$timeout.cancel(filterTextTimeout);
        }
        filterTextTimeout = $timeout(function() {
            $scope.searchTextApplied = $scope.searchText;
        }, 300);
   	});
    };
  });
