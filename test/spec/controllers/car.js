'use strict';

describe('Controller: CarCtrl', function () {

  // load the controller's module
  beforeEach(module('carShowRoomApp'));

  var CarCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CarCtrl = $controller('CarCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
