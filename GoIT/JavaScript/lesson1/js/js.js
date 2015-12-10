var number = +prompt('Введите число, которое нужно возвести в степень', "число");

function isNumeric(n) {         //check if a value is a number
    return !isNaN(parseFloat(n)) && isFinite(n);
}

while (!isNumeric(number)) {
    number = +prompt('Введите правильное число, которое нужно возвести в степень');
};

var exponent = +prompt('Введите степень, в которую нужно возвести', "степень");

function isInteger(num) {       //check if a value is a whole number
    return (num ^ 0) === num;
}

while (!isNumeric(exponent) || !isInteger(exponent)) {
    exponent = +prompt('Введите правильную степень');
};

var pow = function (a, b) {
    var result = 1;

    if (b < 0) {

        for (var i=0; i > b; i--) {
            result *= a;
        }
        result = 1/result;

    } else {
        for (var i=0; i < b; i++) {
            result *= a;
        }
    }

    return result;

};

var powResult = pow(number, exponent);

console.log(powResult);
