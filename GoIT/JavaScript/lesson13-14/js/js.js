'use strict';
(function() {

document.addEventListener('DOMContentLoaded');

var questions = [
    {
      title: "What is HTML?",
      answer: ["HyperText Markup Language", "Objective Programming Language", "It is a high-level programming language"],
      correctAnswers: {
        quest1answ1: 1
      }
    },
    {
      title: "What is CSS?",
      answer: ["HyperText Markup Language", "Cascading Style Sheets", "Objective Programming Language"],
      correctAnswers: {
        quest2answ2: 2
      }
    },
    {
      title: "What is JavaScript?",
      answer: ["It is a high-level programming language", "Objective Programming Language", "It is a high-level, dynamic, untyped, and interpreted programming language.", "HyperText Markup Language"],
      correctAnswers: {
        quest3answ1: 1,
        quest3answ3: 3
      }
    }
  ];

var test = localStorage.setItem("test", JSON.stringify(questions));
var testGet = localStorage.getItem('test');
var actualTest = JSON.parse(testGet);

var tmpl = _.template(document.getElementById("test-template").innerHTML);
var result = tmpl({
  data: actualTest
});

document.getElementsByTagName("form")[0].innerHTML = result + document.getElementsByTagName("form")[0].innerHTML;
var answerCorrected = [];

for (var i = 0; i < actualTest.length; i++) {
  var counter = 0;
  for (var key in actualTest[i].correctAnswers) {
    answerCorrected.push(key);
    counter += 1;
  }
  if (counter == 2) {
    var span = document.createElement('span');
    var list = document.getElementsByClassName("question__items")[i];
    span.innerHTML = '(two right answers)';
    list.insertBefore(span, list.children[0]);
    actualTest[i].title += " (two right answers)";
  }

}


function createModal(correctAnswers, wrongAnswers) {
    var totalAnswers = answerCorrected.length;

    document.getElementsByClassName("modal")[0].innerHTML = "<p>You have " + correctAnswers + " correct and " + wrongAnswers + " incorrect answers.</p>";
    var button = document.createElement("a");
    var path = document.querySelector(".modal");
    var textResult = document.createElement("p");
    button.setAttribute('href', "#");
    button.classList.add('results__close');
    button.innerHTML = "Close result";
    path.appendChild(textResult);
    path.appendChild(button);


    if (correctAnswers === totalAnswers) {
        textResult.innerHTML = "Greate!!! Good job!!!";
        textResult.classList.add("message__green");
    } else if (correctAnswers > totalAnswers/2) {
        textResult.innerHTML = "You should be more attentive.";
        textResult.classList.add("message__yellow");
    } else {
        textResult.innerHTML = "You flunk this test! Try again!";
        textResult.classList.add("message__red");
    }

    document.querySelector(".results__close").addEventListener("click", closeModal);
	}

  function closeModal(e) {

    e.preventDefault();

    document.getElementsByClassName('modal')[0].style.display = "none";
    document.getElementsByClassName('overlay')[0].style.display = "none";
    document.querySelector("p[class^=message]").className = "";

    var inputsChecked = document.querySelectorAll('.wrapper .question__items input:checked');
		[].forEach.call(inputsChecked, function(inputsChecked) {
			inputsChecked.checked = false;
      inputsChecked.parentElement.classList.remove("wrong");
      inputsChecked.parentElement.classList.remove("right");
		});

  }

var input = document.querySelectorAll('.wrapper .question__items');

for (var i = 0; i < input.length; i++) {
  var limit = 1;

  if (i == input.length - 1) {
    limit = 2;
  }

  var inputChecked = input[i].querySelectorAll("input");
  checkBoxLimit(inputChecked, limit);
}

function checkBoxLimit(checkBoxGroup, limit) {
    for (var i = 0; i < checkBoxGroup.length; i++) {
        checkBoxGroup[i].onclick = function() {
            var checkedcount = 0;
            for (var i = 0; i < checkBoxGroup.length; i++) {
                checkedcount += (checkBoxGroup[i].checked) ? 1 : 0;
            }
            if (checkedcount > limit) {
                alert("You can select only " + limit + " checkboxes.");
                this.checked = false;
            }
        }
    }
}

function checkedTest(e) {

  e.preventDefault();
  var rightAnswer = 0;
  var wrongAnswer = 0;

  var userAnswer = [];
  var checkedInput = document.querySelectorAll(".question__items input:checked");



  for (var i = 0; i < checkedInput.length; i++) {

    userAnswer.push(checkedInput[i].name);
    var correct = false;

    for (var j = 0; j < answerCorrected.length; j++) {

      if (checkedInput[i].name === answerCorrected[j] ) {
        correct = true;
      }

    }

    if (correct) {
      rightAnswer += 1;
    } else {
      wrongAnswer += 1;
    }

  }

createModal(rightAnswer, wrongAnswer);
document.getElementsByClassName('modal')[0].style.display = "block";
document.getElementsByClassName('overlay')[0].style.display = "block";
}

document.getElementsByClassName("checked")[0]
        .addEventListener("click", checkedTest);

})();
