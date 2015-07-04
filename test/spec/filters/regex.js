'use strict';

describe('Filter: regex', function () {

  // load the filter's module
  beforeEach(module('carShowRoomApp'));

  // initialize a new instance of the filter before each test
  var regex;
  beforeEach(inject(function ($filter) {
    regex = $filter('regex');
  }));

  it('should return the input prefixed with "regex filter:"', function () {
    var text = 'angularjs';
    expect(regex(text)).toBe('regex filter: ' + text);
  });

});
