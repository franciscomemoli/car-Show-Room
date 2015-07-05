'use strict';

/**
 * @ngdoc service
 * @name carShowRoomApp.carService
 * @description
 * # carService
 * Factory in the carShowRoomApp.
 */
angular.module('carShowRoomApp')
  .factory('carService', function ($q,$http) {
    // Public API here
    return {
      getAll: function () {
      	var deferred = $q.defer();
        $http.get('data.json').success(function (data) {
            deferred.resolve(data);
        });
        return deferred.promise;
      }
    };
  });





