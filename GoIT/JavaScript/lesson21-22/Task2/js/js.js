var app = {
  pow: function(number, exponent) {
    var result = 1;
    if (exponent < 0) {
      for (var i = 0; i > exponent; i--) {
          result *= number;
      }
      result = 1/result;
      } else {
          for (var i = 0; i < exponent; i++) {
              result *= number;
          }
      }
          return result;
      },
      isNumeric: function(n) {         //check if a value is a number
        return !isNaN(parseFloat(n)) && isFinite(n);
      }
    }

    if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = app;
}
