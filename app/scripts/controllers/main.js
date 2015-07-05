'use strict';

/**
 * @ngdoc function
 * @name carShowRoomApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the carShowRoomApp
 */
angular.module('carShowRoomApp')
  .controller('MainCtrl', function ($scope,carService,$timeout,$modal) {
    $scope.cars = [];
    $scope.loadHome = function (){
    	var promise = carService.getAll();
    	promise.then(function(data) {
			$scope.cars = data;
	        }, function(error) {
	            console.log('error');
	        });
    $scope.select = function (car){
    	if(car.selected){
    		car.selected = (car.selected)? false : true;
    	}else{
	    	var carsToCompare = [];
	        for (var i = 0; i < $scope.cars.length; i++) {
	            if ($scope.cars[i].selected) {
	                carsToCompare.push(angular.copy($scope.cars[i]));
	            }
	        }
	        if(carsToCompare.length === 3 ){
	        	console.log("error");
	        }else{
	    		car.selected = (car.selected)? false : true;
	        }
    	}
    };
    $scope.compare = function(){
		var modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/compare.html',
            controller: 'CompareCtrl',
            size: 'lg',
            resolve: {
                items: function () {
	                    var carsToCompare = [];
	                    for (var i = 0; i < $scope.cars.length; i++) {
	                        if ($scope.cars[i].selected) {
	                            carsToCompare.push(angular.copy($scope.cars[i]));
	                        }
	                    }
	                    return carsToCompare;
                	}
            	}
   			});
		};
    $scope.searchText = '';
    $scope.searchTextApplied = '';
    var filterTextTimeout;
    $scope.$watch('searchText', function (newValue, oldValue) {
        if (filterTextTimeout){
        	$timeout.cancel(filterTextTimeout);
        }
        filterTextTimeout = $timeout(function() {
            $scope.searchTextApplied = $scope.searchText.toLowerCase();
        }, 300);
   	});
   	$scope.show = function (car){
   		var modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'views/car.html',
            controller: 'CarCtrl',
            size: 'lg',
            resolve: {
                car: function (){
	                	return car;
	                }
            	}
   			});
		};
	};
  });
