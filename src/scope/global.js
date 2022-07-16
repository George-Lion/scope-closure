// variables

var a; // declarrando
var b = "b"; // declarando /  asignando
b = "bb"; //reasignación
var a = "aa"; // redeclaración

// Global Scope
var fruit = "Apple"; // Global

function bestFruit() {
  console.log(fruit);
}

bestFruit();

function countries() {
  country = "Colombia"; // es global porque no esta inicializado (var, let o const)
  console.log(country);
}

countries();
console.log(country);
