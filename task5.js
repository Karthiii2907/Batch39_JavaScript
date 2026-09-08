
// Variables & Data Types


// Q1: Difference between var, let and const

// var:
// Function scoped
// Can be re-declared
// Can be re-assigned

// let:
// Block scoped
// Cannot be re-declared in the same scope
// Can be re-assigned

// const:
// Block scoped
// Cannot be re-declared
// Cannot be re-assigned


// Example:

var varValue = 10;
varValue = 20;

let letValue = 30;
letValue = 40;

const constValue = 50;

console.log("var:", varValue);
console.log("let:", letValue);
console.log("const:", constValue);


// Q2: Re-declaration of var, let and const

// var can be re-declared

var a = 10;
var a = 20;

console.log("var re-declared:", a);


// let cannot be re-declared in the same scope

let b = 10;
// let b = 20; // Error


// const cannot be re-declared

const c = 10;
// const c = 20; // Error


// Q3: What is the output?

var x = 5;
let y = 10;
const z = 15;

x = 20;
y = 25;

// z = 30;

console.log(x, y, z);


// Q4: Declaring vs Initializing

// Declaration means creating a variable

let age;


// Initialization means assigning a value

age = 25;

console.log("Age:", age);


// Declaration and initialization together

let city = "Chennai";

console.log("City:", city);


// Q5: What will be the output?

let value;

console.log(value);

// Output:
// undefined


// Q6: What is hoisting?

// Hoisting means JavaScript processes certain declarations
// before executing the code.

console.log(hoistedValue);

var hoistedValue = 100;

// Output:
// undefined


// Q7: Difference between null and undefined

// undefined:
// Variable is declared but no value is assigned.

let firstValue;

console.log(firstValue);


// null:
// Intentionally assigned as an empty value.

let secondValue = null;

console.log(secondValue);


// Q8: typeof values

console.log(typeof null);
console.log(typeof undefined);
console.log(typeof []);
console.log(typeof {});

// Output:
// object
// undefined
// object
// object


// Operators


// Q9: Difference between == and ===

// == checks value and performs type conversion if needed.

console.log(5 == "5");

// === checks both value and data type.

console.log(5 === "5");

// Output:
// true
// false


// Q10: Difference between ++i and i++

// ++i is pre-increment.
// It increases the value first.

let pre = 5;

console.log(++pre);

// Output:
// 6


// i++ is post-increment.
// It uses the current value first and then increases it.

let post = 5;

console.log(post++);
console.log(post);

// Output:
// 5
// 6


// Q11: What will be the output?

let number1 = 10;
let number2 = "5";

console.log(number1 + number2);
console.log(number1 - number2);
console.log(number1 * number2);
console.log(number1 / number2);

// Output:
// 105
// 5
// 50
// 2


// Q12: Logical Operators

// AND operator &&
// Both conditions must be true.

console.log(5 > 3 && 10 > 5);


// OR operator ||
// At least one condition must be true.

console.log(5 > 10 || 10 > 5);


// NOT operator !
// Reverses the result.

console.log(!(5 > 3));

// Output:
// true
// true
// false


// Q13: What will be the output?

console.log(5 > 3 && 10 > 5);
console.log(5 > 10 || 10 > 5);
console.log(!(5 > 3));

// Output:
// true
// true
// false


// Q14: Ternary Operator

// Ternary operator is a short form of if-else.

let votingAge = 20;

let votingResult = votingAge >= 18 ? "Eligible" : "Not Eligible";

console.log(votingResult);

// Output:
// Eligible


// Type Casting


// Q15: Implicit and Explicit Type Casting

// Implicit type casting happens automatically.

let implicitResult = "10" - 5;

console.log(implicitResult);

// Output:
// 5


// Explicit type casting is done manually.

let stringNumber = "100";

let convertedNumber = Number(stringNumber);

console.log(convertedNumber);

// Output:
// 100


// Q16: Number and Boolean conversion

console.log(Number("123"));
console.log(Number("hello"));
console.log(Number(true));
console.log(Number(false));

console.log(Boolean(0));
console.log(Boolean("hello"));

// Output:
// 123
// NaN
// 1
// 0
// false
// true


// Q17: What is NaN?

// NaN means Not a Number.

let invalidNumber = Number("hello");

console.log(invalidNumber);

// Output:
// NaN


// Conditional Statements


// Q18: if-else vs switch

// if-else is useful for conditions and ranges.

// switch is useful when comparing one value
// with multiple fixed cases.


// Example of if-else:

let marks = 85;

if (marks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}


// Example of switch:

let day = 2;

switch (day) {
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    default:
        console.log("Invalid day");
}


// Q19: What will be the output?

let currentAge = 20;

if (currentAge >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

// Output:
// Adult


// Q20: Nested if

// Nested if means an if statement inside another if.

let personAge = 20;
let height = 170;

if (personAge >= 18) {

    if (height >= 160) {
        console.log("Eligible");
    }

}


// Q21: Even or Odd using Ternary

let checkNumber = 10;

let evenOdd = checkNumber % 2 === 0 ? "Even" : "Odd";

console.log(evenOdd);

// Output:
// Even


// Loops


// Q22: while vs do-while

// while checks the condition before executing.

// do-while executes the code at least once
// before checking the condition.


// while example:

let whileNumber = 1;

while (whileNumber <= 3) {
    console.log(whileNumber);
    whileNumber++;
}


// do-while example:

let doNumber = 10;

do {
    console.log(doNumber);
    doNumber++;
} while (doNumber <= 5);

// Output:
// 10


// Q23: What will be the output?

for (let loopNumber = 1; loopNumber <= 5; loopNumber++) {
    console.log(loopNumber);
}

// Output:
// 1
// 2
// 3
// 4
// 5


// Q24: for-of vs for-in

// for-of is used to get values.

let fruitList = ["Apple", "Mango", "Orange"];

for (let fruit of fruitList) {
    console.log(fruit);
}


// for-in is used to get keys/properties.

let person = {
    name: "Arun",
    age: 25
};

for (let key in person) {
    console.log(key, person[key]);
}


// Q25: Sum of numbers from 1 to 100

let total = 0;

for (let i = 1; i <= 100; i++) {
    total = total + i;
}

console.log("Sum from 1 to 100:", total);

// Output:
// Sum from 1 to 100: 5050


// Arrays


// Q26: Difference between slice and splice

// slice() does not change the original array.

let sliceArray = [1, 2, 3, 4, 5];

let slicedValues = sliceArray.slice(1, 4);

console.log("Sliced:", slicedValues);
console.log("Original:", sliceArray);

// Output:
// Sliced: [2, 3, 4]
// Original: [1, 2, 3, 4, 5]


// splice() changes the original array.

let spliceArray = [1, 2, 3, 4, 5];

spliceArray.splice(1, 2);

console.log("Spliced:", spliceArray);

// Output:
// Spliced: [1, 4, 5]


// Q27: What will be the output?

let arr = [1, 2, 3];

arr.push(4);
arr.pop();
arr.unshift(0);
arr.shift();

console.log(arr);

// Output:
// [1, 2, 3]


// Functions


// Q28: Function Declaration vs Function Expression

// Function Declaration

function declarationFunction() {
    console.log("Function Declaration");
}

declarationFunction();


// Function Expression

let expressionFunction = function() {
    console.log("Function Expression");
};

expressionFunction();


// Q29: Arrow Function

// Arrow function is a shorter way to write a function.

let addition = (a, b) => {
    return a + b;
};

console.log(addition(10, 20));

// Output:
// 30


// Q30: What will be the output?

function greet() {
    return "Hello";
}

let message = greet();

console.log(message);
