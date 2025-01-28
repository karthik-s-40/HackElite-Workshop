console.log("Hello World")
console.log(document)

let username = window.prompt("Enter your name:");
console.log('Hello ' + username);

var a=10;
let b=20;
const c=30;

if (true) {
    var a = 40; // Re-declared
    let b = 50; // New block scope
    // c = 60; // Error: Assignment to constant variable
  }
  

  console.log(a); // 40 (var is function-scoped)
  console.log(b); // 20 (let is block-scoped)  

let name = "Alice"; // String
let age = 25; // Number
let isStudent = true; // Boolean
let score = null; // Null
let city; // Undefined
console.log(typeof name); // Output: string
console.log(typeof age); // Output: number
console.log(typeof isStudent); // Output: boolean
console.log(typeof score); // Output: object (quirk of JS)
console.log(typeof city); // Output: undefined

function add(a, b) {
    return a + b;
  }
  console.log(add(5, 3));

  if (age >= 18) {
    console.log("Adult");
  } else {
    console.log("Minor");
  }
  
  let grade = "B";
  switch (grade) {
    case "A":
      console.log("Excellent");
      break;
    case "B":
      console.log("Good");
      break;
    default:
      console.log("Needs Improvement");
  }
  
  let result = age >= 18 ? "Adult" : "Minor";
  console.log(result);

let text = "The rain in Spain falls mainly";
let pattern = /rain/;
console.log(pattern.test(text)); // true
console.log(text.match(pattern)); // ['rain']