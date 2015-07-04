'use strict';

describe('Filter: campitalize', function () {

  // load the filter's module
  beforeEach(module('carShowRoomApp'));

  // initialize a new instance of the filter before each test
  var campitalize;
  beforeEach(inject(function ($filter) {
    campitalize = $filter('campitalize');
  }));

  it('should return the input prefixed with "campitalize filter:"', function () {
    var text = 'angularjs';
    expect(campitalize(text)).toBe('campitalize filter: ' + text);
  });

});
