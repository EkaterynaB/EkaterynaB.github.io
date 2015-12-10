var arr = [];
var userName = "";
var flag = false;

for (var i = 0; i < 5; i ++) {
    arr[i] = prompt("Введите имя пользователя").toLowerCase();

    if (arr[i] == '' || arr[i] == ' ') {
        alert("Введите имя пользователя еще раз");
        i -= i;
    }
}

userName = prompt("Введите свое имя").toLowerCase();

while (userName == "") {
    userName = prompt("Введите свое имя").toLowerCase();
}

for (var i = 0; i < arr.length; i++) {
    if (arr[i] === userName) {
        flag = true;
        break;
    }
}

var newName = userName[0].toUpperCase() + userName.substr(1);
console.log(newName);

if (flag) {
    alert(newName + ", вы успешно вошли!");
} else {
    alert("Такого пользователя не существует");
}
