var arr = [];
var userName = "";
var flag = false;
var newArr = [];

for (var i = 0; i < 5; i++) {
    arr[i] = prompt("Введите имя пользователя");

    if (arr[i] == '' || arr[i] == ' ') {
        alert("Введите имя пользователя еще раз");
        i--;
    } else if (arr[i] == null) {
        i = 5;
    }

}

if (arr.length > 1) {

    userName = prompt("Введите свое имя");

    while (userName == "") {
        userName = prompt("Введите свое имя");
    }

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] != null) {
            newArr[i] = arr[i].toLowerCase();
        }

    }

}

if (userName  != null) {

    userName = userName.toLowerCase();

    for (var i = 0; i < newArr.length; i++) {

        if (newArr[i] === userName) {
            flag = true;
            break;
        }

    }

}

function ucFirst(str) {

    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1);
}

var newName = ucFirst(userName);

if (flag) {
    alert(newName + ", вы успешно вошли!");
} else {
    alert("Такого пользователя не существует");
}
