var students = ['Johnathan', 'Mary', 'Estelle']

function logName(name) {
  console.log(name);
}

students.forEach(logName);

function forEach(myArray, myFunction) {
  for (var i = 0; i < myArray.length; i++) {
    myFunction(myArray[i]);
  }
}

forEach(students, logName);
