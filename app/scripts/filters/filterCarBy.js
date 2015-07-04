'use strict';

/**
 * @ngdoc filter
 * @name carShowRoomApp.filter:regex
 * @function
 * @description
 * # regex
 * Filter in the carShowRoomApp.
 */
angular.module('carShowRoomApp')
  .filter('filterCarBy', function () {
     return function(input, field, searchText) {
      var patt = new RegExp(searchText);
      var out = [];
      for (var i = 0; i < input.length; i++){
          if(patt.test(input[i][field]))
              out.push(input[i]);
      }
    return out;
  };
});