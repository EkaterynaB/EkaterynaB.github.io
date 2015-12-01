var number = +prompt('Введите число, которое нужно возвести в степень');
var exponent = +prompt('Введите степень, в которую нужно возвести число');

var pow = function (a, b) {
    var result = 1;

    for (var i=0; i < b; i++) {
        result *= a;
    }

    return result;
};

var powResult = pow(number, exponent);

console.log(powResult);
