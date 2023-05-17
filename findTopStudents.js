var students = [
  {
    name: "Akash",
    age: 20,
    grades: [80, 85, 90],
    hobbies: ["reading", "painting"],
  },
  {
    name: "Suman",
    age: 30,
    grades: [90, 95, 92],
    hobbies: ["cricket", "swimming"],
  },
  {
    name: "Bumba",
    age: 35,
    grades: [70, 75, 80],
    hobbies: ["cooking", "basketball"],
  },
];
function findTopStudents(students, minAverageGrade) {
  var topStudents = [];

  for (var i = 0; i < students.length; i++) {
    var student = students[i];
    var averageGrade = calculateAverageGrades(student);

    if (averageGrade >= minAverageGrade) {
      topStudents.push(student);
    }
  }

  return topStudents;
}

function calculateAverageGrades(student) {
  var sum = 0;

  for (var i = 0; i < student.grades.length; i++) {
    sum += student.grades[i];
  }

  return sum / student.grades.length;
}
var topStudents = findTopStudents(students, 85);
console.log(topStudents);

function addHobby(students, name, hobby) {
  for (var i = 0; i < students.length; i++) {
    if (students[i].name === name) {
      students[i].hobbies.push(hobby);
      break;
    }
  }
}
addHobby(students, "Alice", "painting");
console.log(students);

function updateStudent(students, name, updatedInfo) {
  for (var i = 0; i < students.length; i++) {
    if (students[i].name === name) {
      students[i] = Object.assign({}, students[i], updatedInfo);
      break;
    }
  }
}
updateStudent(students, "Alice", {
  age: 20,
  grades: [90, 80, 95],
  hobbies: ["reading", "painting"],
});
console.log(students);
