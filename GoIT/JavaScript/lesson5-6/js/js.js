var app = {
    createElement: function(params) {
        var element = document.createElement(params.tagName);

        if (params.className) {
            element.className = params.className;
        }

        if (params.content) {
            element.innerHTML = params.content;
        }

        if (params.parentElementEnd) {
            params.parentElementEnd.appendChild(element);
        }

        if (params.parentElementUp) {
            params.parentElementUp.insertBefore(element, params.parentElementUp.children[0]);
        }

        if (params.attributes) {
            for (var key in params.attributes) {
                element.setAttribute(key, params.attributes[key]);
            }
        }

        return element;
    },
    splitTimer: function() {
        app.createElement({
            tagName: "h3",
            className: "split",
            content: "split " + numbSplit + ": "+ timer.innerHTML,
            parentElementUp: splits
        });
        numbSplit++;
    }
}

var body = document.querySelector('body');

var container = app.createElement({
    tagName: "div",
    className: "container text-center",
    parentElementEnd: body
});

var timer = app.createElement({
    tagName: "h3",
    className: "timer",
    content: "00:00:00.000",
    parentElementEnd: container
});

var buttonStart = app.createElement({
    attributes: {
        value: 'start',
    },
    tagName: "button",
    className: "start btn btn-success btn-lg col-md-4",
    content: "start",
    parentElementEnd: container
});

var buttonSplit = app.createElement({
    attributes: {
        value: 'stop',
    },
    tagName: "button",
    className: "split btn btn-danger btn-lg col-md-4",
    content: "split",
    parentElementEnd: container
});

var buttonReset = app.createElement({
    attributes: {
        value: 'reset',
    },
    tagName: "button",
    className: "reset btn btn-warning btn-lg col-md-4",
    content: "reset",
    parentElementEnd: container
});

var splits = app.createElement({
    tagName: "div",
    className: "splits",
    parentElementEnd: container
});

var date = new Date(0, 0);
var min = 0;
var sec = 0;
var hours = 0;
var startTimer;
var numbSplit = 1;

function timeCount() {
    var hoursNum;
    var minNum;
    var secNum;
    var millisecNumb;

    date.setMilliseconds( date.getMilliseconds() + 4);

    var millisec = date.getMilliseconds();

    if (millisec === 996) {
        millisec = 0;
        sec++;
    }

    if (sec === 60) {
        sec = 0;
        min++;
    }

    if (min === 60) {
        hours++;
    }

    if (hours < 10) {
        hoursNum = "0" + hours;
    } else {
        hoursNum = hours;
    }

    if (min < 10) {
        minNum = "0" + min;
    } else {
        minNum = min;
    }

    if (sec < 10) {
        secNum = "0" + sec;
    } else {
        secNum = sec;
    }

    if (millisec < 10) {
        millisecNumb = "00" + millisec;
    } else if (millisec < 100) {
        millisecNumb = "0" + millisec;
    } else {
        millisecNumb = millisec;
    }

    var timerString = hoursNum + ":" + minNum + ":" + secNum + "." + millisecNumb;
    return timer.innerHTML = timerString;
}

function stopInterval() {
    clearInterval(startTimer);
}

function changeButton() {

    if (buttonStart.innerHTML === "start") {
        buttonStart.innerHTML = "pause";
        buttonStart.value = "pause";
        startTimer = setInterval(timeCount, 4);
    } else {
        buttonStart.innerHTML = "start";
        buttonStart.value = "start";
        stopInterval();
    }
}

function restTimer() {
    stopInterval();
    timer.innerHTML = "00:00:00.000";
    buttonStart.innerHTML = "start";
    buttonStart.value = "start";
    date = new Date(0, 0);
    min = 0;
    sec = 0;
    hours = 0;

    while (splits.firstChild) {
        splits.removeChild(splits.firstChild);
    }
}

buttonStart.addEventListener('click', changeButton);
buttonReset.addEventListener('click', restTimer);
buttonSplit.addEventListener('click', app.splitTimer);
