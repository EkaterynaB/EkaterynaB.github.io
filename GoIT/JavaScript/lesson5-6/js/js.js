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
    }
};

var body = document.querySelector("body");
var numbSplit = 1;

var container = app.createElement({
    tagName: "div",
    className: "container text-center",
    parentElementEnd: body
});

var timerText = app.createElement({
    tagName: "h3",
    className: "timer",
    content: "00:00:00.000",
    parentElementEnd: container
});

var buttonStart = app.createElement({
    attributes: {
        value: "start",
    },
    tagName: "button",
    className: "start btn btn-success btn-lg col-md-4",
    content: "start",
    parentElementEnd: container
});

var buttonSplit = app.createElement({
    attributes: {
        value: "stop",
        disabled: "disabled"
    },
    tagName: "button",
    className: "split btn btn-danger btn-lg col-md-4",
    content: "split",
    parentElementEnd: container
});

var buttonReset = app.createElement({
    attributes: {
        value: "reset",
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

var stopTimer =  app.createElement({
    	tagName: "h3",
    	className: "stop",
    	parentElementUp: splits
    });

function Timer() {
    var timers = this;
	var date = new Date(0, 0);
	var min = 0;
	var sec = 0;
	var hours = 0;
	var startTimer;
    timers.numbSplit = 1;
    timers.buttonStart = document.getElementsByClassName("start")[0];
    timers.buttonReset = document.getElementsByClassName("reset")[0];
    timers.buttonSplit = document.getElementsByClassName("split")[0];
	timers.splits = document.querySelector(".splits");

    timers.timeCount = function() {
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
        return timerText.innerHTML = timerString;
    };
    timers.stopInterval = function() {
        clearInterval(startTimer);
    };
    timers.changeButton = function() {

        if (buttonStart.innerHTML === "start") {
            buttonStart.innerHTML = "stop";
            buttonStart.value = "stop";
            startTimer = setInterval(timers.timeCount, 4);
            buttonSplit.disabled = false;
        } else {
            buttonStart.innerHTML = "start";
            buttonStart.value = "start";
            timers.stopInterval();
            timers.addStopText();
            buttonSplit.disabled = true;
            numbSplit++;
        }
    };
    timers.resetTimer =  function() {
        timers.stopInterval();
        timerText.innerHTML = "00:00:00.000";
        buttonStart.innerHTML = "start";
        buttonStart.value = "start";
        date = new Date(0, 0);
        min = 0;
        sec = 0;
        hours = 0;
        numbSplit = 1;
        splits.innerHTML = "";
    };
	timers.addSplitText = function() {
        var h3 = document.createElement("h3");
		timers.splits.insertBefore(h3, timers.splits.children[0]);
        h3.innerHTML = "split " + timers.numbSplit + ": "+ timerText.innerHTML;
        timers.numbSplit += 1;
	};
    timers.addStopText = function() {
        var h3 = document.createElement("h3");
		timers.splits.insertBefore(h3, timers.splits.children[0]);
        h3.innerHTML = "stop " + timers.numbSplit + ": "+ timerText.innerHTML;
        timers.numbSplit += 1;
	};
    timers.init = function() {
		buttonStart.addEventListener("click", timers.changeButton);
		buttonReset.addEventListener("click", timers.resetTimer);
		buttonSplit.addEventListener("click", timers.addSplitText);
	};
}

var timerOne = new Timer();
timerOne.init();
