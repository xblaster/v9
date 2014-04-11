'use strict';

describe('Service: Googlspreadsheet', function () {

  // load the service's module
  beforeEach(module('v9App'));

  // instantiate service
  var Googlspreadsheet;
  beforeEach(inject(function (_Googlspreadsheet_) {
    Googlspreadsheet = _Googlspreadsheet_;
  }));

  it('should do something', function () {
    expect(!!Googlspreadsheet).toBe(true);
  });

});
