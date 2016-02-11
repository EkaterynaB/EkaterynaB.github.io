function Human() {
  this.nameHum = "John",
  this.age = 27,
  this.gender = "male",
  this.heightHum = 175,
  this.weight = 70
}

function Worker() {
  this.workPlace = "Company",
  this.salary = 4000
}

Worker.prototype = new Human();

Worker.prototype.work = function() {
  alert('Скоро пятница!');
};

function Student() {
  this.studyPlace = "GoIT",
  this.grants = 1000
}

Student.prototype = new Human();

Student.prototype.watchTV = function() {
  alert('Давай ещё серию, забей на пары!');
};


var newHuman = new Human();
var newStudentOne = new Student();
newStudentOne.grants = 5000;
var newWorkerOne = new Worker();
newWorkerOne.workPlace = "Big Company";
var newStudentTwo = new Student();
var newWorkerTwo = new Worker();

console.log("newStudentOne", newStudentOne);
console.log("newWorkerOne", newWorkerOne);
console.log("newStudentTwo", newStudentTwo);
console.log("newWorkerTwo", newWorkerTwo);
