'use strict';

/**
 * @ngdoc filter
 * @name carShowRoomApp.filter:capitalize
 * @function
 * @description
 * # capitalize
 * Filter in the carShowRoomApp.
 */
angular.module('carShowRoomApp')
  .filter('capitalize', function () {
return function (input, format) {
      if (!input) {
        return input;
      }
      format = format || 'all';
      if (format === 'first') {
        // Capitalize the first letter of a sentence
        return input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
      } else {
        var words = input.split(' ');
        var result = [];
        words.forEach(function(word) {
          if (word.length === 2 && format === 'team') {
            // Uppercase team abbreviations like FC, CD, SD
            result.push(word.toUpperCase());
          } else {
            result.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
          }
        });
        return result.join(' ');
      }
    };
});
