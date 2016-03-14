var app = require('../js/js.js');

describe("pow", function() {
  it("exponentiation function", function() {
  	var result;

  	result = app.pow(2,3)
    expect(result).toBe(8);
  });
});

describe("pow", function() {
  it("exponentiation function", function() {
  	var result;

  	result = app.pow(4,-2)
    expect(result).toBe(0.0625);
  });
});

describe("pow", function() {
  it("exponentiation function", function() {
  	var result;

  	result = app.pow(4,0)
    expect(result).toBe(1);
  });
});

  describe("isNumeric", function() {
    it("exponentiation function", function() {
    	var result;

    	result = app.isNumeric(4)
      expect(result).toBe(true);
    });
});
