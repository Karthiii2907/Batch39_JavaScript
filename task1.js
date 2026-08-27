// JavaScript Basics

//50 Questions and Answers


// 1. What is a variable in JavaScript?

// A variable is a named container used to store data/value.


// 2. What are the three keywords used to create variables?

// var, let, and const.


// 3. Syntax using var:

var age = 25;


// 4. Syntax using let:

let age = 25;


// 5. Syntax using const:

const age = 25;


// 6. What is declaration?

// Declaration means creating a variable without assigning a value.

// Example:

let age;


// 7. What is initialization?

// Initialization means assigning a value to a variable when it is created.

// Example:

let age = 25;


// 8. What is reassignment?

// Reassignment means changing the value of an existing variable.

let age = 25;
age = 30;


// 9. What is redeclaration?

// Redeclaration means declaring the same variable again using the same keyword.

// Example:

var x = 10;
var x = 20;


// 10. Which keyword allows redeclaration?

// var


// 11. Which keyword allows reassignment?

// var and let


// 12. Which keyword requires initialization when declared?

// const

const age = 25;


// 13. Identify declaration and initialization:

let age = 25;

// Declaration → let age
// Initialization → = 25


// 14. What is the value of a?

var a = 100;
console.log(a);

// Answer: 100


// 15. Change the value to 200:

let number = 100;
number = 200;

// var


// 16. Output:

var a = 10;
console.log(a);

// Answer:
// 10


// 17. Output:

var a = 10;
a = 20;
console.log(a);

// Answer:
// 20


// 18. Output:

var a = 10;
var a = 30;
console.log(a);

// Answer:
// 30


// 19. Create var name:

var name = "John";


// 20. Create var price:

var price = 500;


// 21. Reassign price:

var price = 500;
price = 1000;


// 22. Output:

var x = 50;
x = 100;
console.log(x);

// Answer:
// 100


// 23. Can a var variable be reassigned?

// Yes.


// 24. Can a var variable be redeclared?

// Yes.


// 25. Example of var redeclaration:

var name = "John";
var name = "David";



// let


// 26. Create let age:

let age = 25;


// 27. Output:

let age = 20;
age = 30;
console.log(age);

// Answer:
// 30


// 28. Can a let variable be reassigned?

// Yes.


// 29. Can a let variable be redeclared?

// No.


// 30. Find the error:

let name = "John";
// let name = "David";

// The same let variable cannot be redeclared.


// 31. Create city:

let city = "Chennai";


// 32. Change city to Salem:

city = "Salem";


// 33. Output:

let x = 10;
x = 50;
console.log(x);

// Answer:
// 50


// 34. Create salary:

let salary = 25000;


// 35. Reassign salary:

salary = 30000;



// const


// 36. Create pi:

const pi = 3.14;


// 37. Can a const variable be reassigned?

// No.


// 38. Can a const variable be redeclared?

// No.


// 39. What is wrong here?

// const age;
// age = 25;

// A const variable must be initialized when declared.

// Correct:

const age = 25;


// 40. What happens here?

const price = 500;
// price = 1000;

// It produces an error because a const variable cannot be reassigned.


// 41. Create country:

const country = "India";


// 42. Output:

const x = 100;
console.log(x);

// Answer:
// 100


// 43. Which keyword should you use if the value should not be reassigned?

// const


// 44. Difference between let and const:

// let:
// Can be reassigned
// Does not require immediate initialization
// Cannot be redeclared

// const:
// Cannot be reassigned
// Requires initialization
// Cannot be redeclared

// Example:

let age = 20;
age = 25;

const age = 20;
// age = 25;


// 45. Difference between var and const:

// var:
// Can be reassigned
// Can be redeclared
// Can be declared without initialization

// const:
// Cannot be reassigned
// Cannot be redeclared
// Must be initialized



// Printing & Console


// 46. Print Hello World:

console.log("Hello World");


// 47. Print 500:

console.log(500);


// 48. Purpose of console.warn():

// It is used to display a warning message in the console.

console.warn("This is a warning");


// 49. Purpose of console.error():

// It is used to display an error message in the console.

console.error("Something went wrong");


// 50. Purpose of each:


// alert()
// Displays a message to the user.

alert("Hello");


// prompt()
// Asks the user to enter some information.

prompt("Enter your name");


// confirm()
// Asks the user to confirm something.

confirm("Are you sure?");


// document.writeln()
// Writes content directly onto the webpage.

document.writeln("Hello World");


// console.log()
// Displays information in the browser console.

console.log("Hello World");



// Practical Questions 


// 1. Student name, age and mark

let studentName = "Karthik";
let age = 22;
let mark = 85;

console.log(studentName);
console.log(age);
console.log(mark);


// 2. Ask name using prompt() and display using alert()

let name = prompt("Enter your name");
alert(name);


// 3. Ask age using prompt() and print using console.log()

let age = prompt("Enter your age");
console.log(age);


// 4. Ask a question using confirm()

confirm("Do you want to continue?");


// 5. Ask name and display using document.writeln()

let name = prompt("Enter your name");
document.writeln(name);