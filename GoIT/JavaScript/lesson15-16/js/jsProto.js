function Human(nameHum, age, gender, heightHum, weight) {
  this.nameHum = nameHum || "John";
  this.age = age || 27;
  this.gender = gender || "male";
  this.heightHum = heightHum || 175;
  this.weight = weight || 70;
}

function Worker(workPlace, salary, nameHum, age, gender, heightHum, weight) {
  Human.call(this, nameHum, age, gender, heightHum, weight);

  this.workPlace = workPlace || "Company";
  this.salary = salary || 4000;
}

Worker.prototype = Object.create(Human.prototype);
Worker.prototype.constructor = Worker;

Worker.prototype.work = function () {
  alert('Скоро пятница!');
};

function Student(studyPlace, grants, nameHum, age, gender, heightHum, weight) {
  Human.call(this, nameHum, age, gender, heightHum, weight);

  this.studyPlace = studyPlace || "GoIT";
  this.grants = grants || 1000;
}

Student.prototype = Object.create(Human.prototype);
Student.prototype.constructor = Student;

Student.prototype.watchTV = function () {
  alert('Давай ещё серию; забей на пары!');
};

var newHuman = new Human("Human", 27, "male", 175, 70);
var newStudentOne = new Student("Student", 1000, "Student1", 27, "male", 175, 70);
newStudentOne.grants = 5000;
var newWorkerOne = new Worker("Company", 4000, "Worker1", 27, "male", 175, 70);
newWorkerOne.workPlace = "Big Company";
var newStudentTwo = new Student("GoIT", 1000, "Student2", 27, "male", 175, 70);
var newWorkerTwo = new Worker("Company", 4000, "Worker2", 27, "male", 175, 70);

console.log("newStudentOne", newStudentOne);
console.log("newWorkerOne", newWorkerOne);
console.log("newStudentTwo", newStudentTwo);
console.log("newWorkerTwo", newWorkerTwo);
