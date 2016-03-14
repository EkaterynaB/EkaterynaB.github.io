'use strict';

(function () {

  var questions = [{
    title: "What is HTML?",
    answer: ["HyperText Markup Language", "Objective Programming Language", "It is a high-level programming language"],
    correctAnswers: {
      quest1answ1: 1
    }
  }, {
    title: "What is CSS?",
    answer: ["HyperText Markup Language", "Cascading Style Sheets", "Objective Programming Language"],
    correctAnswers: {
      quest2answ2: 2
    }
  }, {
    title: "What is JavaScript?",
    answer: ["It is a high-level programming language", "Objective Programming Language", "It is a high-level, dynamic, untyped, and interpreted programming language.", "HyperText Markup Language"],
    correctAnswers: {
      quest3answ1: 1,
      quest3answ3: 3
    }
  }];

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
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = actualTest[i].correctAnswers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var key = _step.value;

        answerCorrected.push(key);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  function addTextHint() {

    for (var i = 0; i < actualTest.length; i++) {
      var countCorrectAnswers = Object.keys(actualTest[i].correctAnswers);

      if (countCorrectAnswers.length === 2) {

        var span = document.createElement('span');
        var list = document.getElementsByClassName("question__items")[i];
        span.innerHTML = '(two right answers)';
        list.insertBefore(span, list.children[0]);
        actualTest[i].title += " (two right answers)";
      }
    }
  }

  addTextHint();

  function closeModal(e) {

    e.preventDefault();

    document.querySelector('.modal').style.display = "none";
    document.querySelector('.overlay').style.display = "none";
    document.querySelector("p[class^=message]").className = "";

    var inputsChecked = document.querySelectorAll('.wrapper .question__items input:checked');
    Array.prototype.forEach.call(inputsChecked, function (inputsChecked) {
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
      checkBoxGroup[i].onclick = function () {
        var checkedcount = 0;
        for (var _i = 0; _i < checkBoxGroup.length; _i++) {
          checkedcount += checkBoxGroup[_i].checked ? 1 : 0;
        }
        if (checkedcount > limit) {
          alert("You can select only " + limit + " checkboxes.");
          this.checked = false;
        }
      };
    }
  }

  function checkedTest(e) {

    e.preventDefault();
    var rightAnswer = 0;
    var wrongAnswer = 0;
    var answerObj = { Testresult: ["Greate!!! Good job!!!", "You should be more attentive.", "You flunk this test! Try again!"] };
    var totalAnswers = answerCorrected.length;
    var userAnswer = [];
    var checkedInput = document.querySelectorAll(".question__items input:checked");

    for (var i = 0; i < checkedInput.length; i++) {

      userAnswer.push(checkedInput[i].name);
      var correct = false;

      for (var j = 0; j < answerCorrected.length; j++) {

        if (checkedInput[i].name === answerCorrected[j]) {
          correct = true;
        }
      }

      if (correct) {
        rightAnswer += 1;
      } else {
        wrongAnswer += 1;
      }
    }

    answerObj.right = rightAnswer;
    answerObj.wrong = wrongAnswer;

    if (rightAnswer === totalAnswers) {
      answerObj.resultTest = "Greate!!! Good job!!!";
      answerObj.className = "message__green";
    } else if (rightAnswer > totalAnswers / 2) {
      answerObj.resultTest = "You should be more attentive.";
      answerObj.className = "message__yellow";
    } else {
      answerObj.resultTest = "You flunk this test! Try again!";
      answerObj.className = "message__red";
    }

    var tmplAnswer = _.template(document.getElementById("answer-template").innerHTML);
    var resultAnswer = tmplAnswer(answerObj);

    document.querySelector(".modal").innerHTML = resultAnswer;
    document.querySelector('.modal').style.display = "block";
    document.querySelector('.overlay').style.display = "block";
    document.querySelector(".results__close").addEventListener("click", closeModal);
  }

  document.querySelector(".checked").addEventListener("click", checkedTest);
})();

 module.exports = addTextHint;

// 'use strict';
//
// (function() {
//   let testGet = localStorage.getItem('test');
//   let actualTest = JSON.parse(testGet);
//   let tmpl = _.template(document.getElementById("test-template").innerHTML);
//   let result = tmpl({
//     data: actualTest
//   });
//
//   document.getElementsByTagName("form")[0].innerHTML = result + document.getElementsByTagName("form")[0].innerHTML;
//
// //Arr with name of correctAnswers
// let answerCorrected = [];
// for (let i = 0; i < actualTest.length; i++) {
//     for (let key in actualTest[i].correctAnswers) {
//     answerCorrected.push(key);
//     }
// }
//
// //add Hint Text if we have 2 correct answers
// function addTextHint() {
//
//     for (let i = 0; i < actualTest.length; i++) {
//         let countCorrectAnswers = Object.keys(actualTest[i].correctAnswers);
//
//         if (countCorrectAnswers.length === 2) {
//
//             let span = document.createElement('span');
//             let list = document.getElementsByClassName("question__items")[i];
//             span.innerHTML = '(two right answers)';
//             list.insertBefore(span, list.children[0]);
//             actualTest[i].title += " (two right answers)";
//         }
//     }
// }
//
// addTextHint();
//
// function createModal(correctAnswers, wrongAnswers) {
//
//     let totalAnswers = answerCorrected.length;
//     document.getElementsByClassName("modal")[0].innerHTML = "<p>You have " + correctAnswers + " correct and " + wrongAnswers + " incorrect answers.</p>";
//     let button = document.createElement("a");
//     let path = document.querySelector(".modal");
//     let textResult = document.createElement("p");
//     button.setAttribute('href', "#");
//     button.classList.add('results__close');
//     button.innerHTML = "Close result";
//     path.appendChild(textResult);
//     path.appendChild(button);
//
//     if (correctAnswers === totalAnswers) {
//         textResult.innerHTML = "Greate!!! Good job!!!";
//         textResult.classList.add("message__green");
//     } else if (correctAnswers > totalAnswers/2) {
//         textResult.innerHTML = "You should be more attentive.";
//         textResult.classList.add("message__yellow");
//     } else {
//         textResult.innerHTML = "You flunk this test! Try again!";
//         textResult.classList.add("message__red");
//     }
//
//     document.querySelector(".results__close").addEventListener("click", closeModal);
// }
//
//   function closeModal(e) {
//     e.preventDefault();
//
//     document.getElementsByClassName('modal')[0].style.display = "none";
//     document.getElementsByClassName('overlay')[0].style.display = "none";
//     document.querySelector("p[class^=message]").className = "";
//
//     let inputsChecked = document.querySelectorAll('.wrapper .question__items input:checked');
// 		[].forEach.call(inputsChecked, function(inputsChecked) {
// 			inputsChecked.checked = false;
// 		});
//
//   }
//
//
// function createCountOfAnswer() {
//     let limitObj = {};
//     let inputChecked = [];
//     let limit = [];
//     let input = document.querySelectorAll('.wrapper .question__items');
//
//     for (let i = 0; i < actualTest.length; i++) {
//        let numb = 0;
//        let quest = "quest" + (i + 1);
//
//        for (let key in actualTest[i].correctAnswers) {
//           limitObj[quest] = ++numb;
//        }
//
//        inputChecked = input[i].querySelectorAll("input");
//        limit = limitObj[quest];
//        checkAnswerlimit(inputChecked, limit);
//    }
// }
//
// function checkAnswerlimit(inputChecked, limit) {
//
//   for (let z = 0; z < inputChecked.length; z++) {
//
//     inputChecked[z].addEventListener('click',  function() {
//       let checkedcount = 0;
//
//       for (let q = 0; q < inputChecked.length; q++) {
//         checkedcount += (inputChecked[q].checked) ? 1 : 0;
//       }
//       if (checkedcount > limit) {
//         alert("You can select only " + limit + " checkboxes.");
//         this.checked = false;
//       }
//     });
//
//   }
// }
//
// createCountOfAnswer()
//
// function checkedTest(e) {
//
//     e.preventDefault();
//     let rightAnswer = 0;
//     let wrongAnswer = 0;
//
//     let userAnswer = [];
//     let checkedInput = document.querySelectorAll(".question__items input:checked");
//
//     for (let i = 0; i < checkedInput.length; i++) {
//         userAnswer.push(checkedInput[i].name);
//         let correct = false;
//
//         for (let j = 0; j < answerCorrected.length; j++) {
//
//             if (checkedInput[i].name === answerCorrected[j] ) {
//               correct = true;
//             }
//         }
//
//         if (correct) {
//             rightAnswer += 1;
//         } else {
//             wrongAnswer += 1;
//         }
//       }
//
// createModal(rightAnswer, wrongAnswer);
// document.getElementsByClassName('modal')[0].style.display = "block";
// document.getElementsByClassName('overlay')[0].style.display = "block";
// }
//
// document.getElementsByClassName("checked")[0]
//         .addEventListener("click", checkedTest);
//
// })();
//
// module.exports = js;
//# sourceMappingURL=main.js.map
