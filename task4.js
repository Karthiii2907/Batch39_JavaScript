
// Task 1 — For Loop
// Print numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
    console.log(i);
}


// Task 2 — Reverse Number
// Print numbers from 10 to 1

for (let i = 10; i >= 1; i--) {
    console.log(i);
}


// Task 3 — Even Numbers
// Print even numbers from 1 to 20

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// Task 4 — Odd Numbers
// Print odd numbers from 1 to 20

for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}


// Task 5 — Multiplication Table
// Get a number from the user and print its table

let tableNumber = Number(prompt("Enter a number for multiplication table:"));

for (let i = 1; i <= 10; i++) {
    console.log(tableNumber + " x " + i + " = " + (tableNumber * i));
}


// While Loop
// Task 6 — Countdown
// Print numbers from 10 to 1 using while

let count = 10;

while (count >= 1) {
    console.log(count);
    count--;
}


// Task 7 — Sum of Numbers
// Calculate 1 + 2 + 3 + ... + 10

let number = 1;
let sum = 0;

while (number <= 10) {
    sum = sum + number;
    number++;
}

console.log("Sum =", sum);


// Do While
// Task 8 — Print Numbers
// Print numbers from 1 to 5

let i = 1;

do {
    console.log(i);
    i++;
} while (i <= 5);


// Task 9 — Do While Understanding

let a = 10;

do {
    console.log(a);
    a++;
} while (a <= 5);


// For...of
// Task 10 — String Characters

let name = "javascript";

for (let character of name) {
    console.log(character);
}


// Task 11 — Array Values

let fruits = ["apple", "orange", "banana", "mango", "grapes"];

for (let fruit of fruits) {
    console.log(fruit);
}


// Task 12 — Student Names

let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];

for (let student of students) {
    console.log("Student: " + student);
}


// For...in
// Task 13 — Employee Object

let employee = {
    name: "Arun",
    age: 25,
    role: "Developer",
    city: "Chennai"
};

for (let key in employee) {
    console.log(key, employee[key]);
}


// Task 14 — Product Object

let product = {
    productName: "Laptop",
    price: 55000,
    brand: "Dell",
    category: "Electronics",
    stock: 10
};

for (let key in product) {
    console.log(key, product[key]);
}


// Functions
// Task 15 — Simple Function

function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();
welcome();
welcome();


// Task 16 — Function With Parameter

function greet(name) {
    console.log("Hello " + name);
}

greet("Naveen");
greet("Arun");
greet("Priya");


// Task 17 — Multiple Parameters

function student(name, age, department) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
}

student("Arun", 21, "Computer Science");
student("Priya", 22, "Information Technology");
student("Kumar", 20, "Electronics");


// Return
// Task 18 — Addition Function

function add(a, b) {
    return a + b;
}

let result = add(10, 20);

console.log(result);


// Task 19 — Salary

function salary(amount) {
    return amount;
}

let employeeSalary = salary(50000);

console.log("Salary =", employeeSalary);


// Task 20 — Bonus Calculator

function bonus(salary, bonusAmount) {
    return salary + bonusAmount;
}

let totalSalary = bonus(50000, 5000);

console.log("Total Salary =", totalSalary);


// Default Parameter
// Task 21

function employeeDetails(name, role = "Developer") {
    console.log("Name:", name);
    console.log("Role:", role);
}

employeeDetails("Arun");
employeeDetails("Priya", "Designer");


// Function Types
// Task 22 — Named Function

function square(number) {
    return number * number;
}

console.log(square(2));
console.log(square(4));
console.log(square(5));
console.log(square(7));
console.log(square(10));


// Task 23 — Anonymous Function

let calculate = function(a, b) {
    return a + b;
};

console.log("Addition =", calculate(10, 20));


// Task 24 — Arrow Function

let multiply = (a, b) => {
    return a * b;
};

console.log("Multiplication =", multiply(5, 6));


// Scope
// Task 25 — Predict the Output
// var is function scoped.
// let and const are block scoped.

function test() {

    if (true) {

        var a = 10;
        let b = 20;
        const c = 30;

        console.log(a);
        console.log(b);
        console.log(c);
    }

    console.log(a);
    console.log(b);
    console.log(c);
}

test();


// Hoisting
// Task 26 — Predict

console.log(hoistedA);

var hoistedA = 10;



// Task 27 — Predict

console.log(hoistedB);
let hoistedB = 20;


// Task 28 — Predict

console.log(hoistedC);
const hoistedC = 30;


// IIFE
// Task 29 — Self Invoking Function

(function() {
    console.log("Welcome to JavaScript");
})();


// IIFE with product and discount

(function(product, discount) {
    console.log(product + " has " + discount + "% discount");
})("Laptop", 20);


// 🔵 Callback / Higher-Order Function
// Task 30

function welcomeMessage() {
    console.log("Welcome");
}

function execute(callback) {
    callback();
}

execute(welcomeMessage);



// Generator Function
// Task 31 — Cashback

function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let cashbackGenerator = cashback();

for (let value of cashbackGenerator) {
    console.log(value);
}


// 🏆 FINAL MINI PROJECT
// Task 32 — Employee Management Console


// Employee data

let employees = [
    {
        name: "Arun",
        age: 25,
        department: "IT",
        role: "Developer",
        salary: 40000
    },
    {
        name: "Priya",
        age: 24,
        department: "HR",
        role: "HR Executive",
        salary: 35000
    },
    {
        name: "Kumar",
        age: 28,
        department: "Finance",
        role: "Accountant",
        salary: 45000
    }
];


// 1. for...of
// Print every employee

console.log("----- Employee Details -----");

for (let employee of employees) {
    console.log(employee);
}


// 2. for...in
// Print each employee's keys and values

console.log("----- Employee Keys and Values -----");

for (let employee of employees) {

    for (let key in employee) {
        console.log(key, employee[key]);
    }

    console.log("----------------");
}


// 3. Function
// Display employee information

function displayEmployee(name, age, department, role, salary) {

    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Department:", department);
    console.log("Role:", role);
    console.log("Salary:", salary);
}


// 4. Function Parameters
// Pass employee information to the function

displayEmployee(
    employees[0].name,
    employees[0].age,
    employees[0].department,
    employees[0].role,
    employees[0].salary
);


// 5. Return
// Return an employee's salary

function getSalary(employee) {
    return employee.salary;
}

let salaryResult = getSalary(employees[0]);

console.log("Employee Salary:", salaryResult);


// 6. Condition
// Check whether salary is greater than or equal to 40000

for (let employee of employees) {

    if (employee.salary >= 40000) {
        console.log(employee.name + " has salary >= 40000");
    } else {
        console.log(employee.name + " has salary < 40000");
    }
}


// 7. Arrow Function
// Calculate yearly salary

let yearlySalary = (salary) => {
    return salary * 12;
};

console.log(
    "Yearly Salary:",
    yearlySalary(employees[0].salary)
);


// 8. Generator
// Employee benefits

function* benefits() {
    yield "Medical Insurance";
    yield "Transport";
    yield "Food Allowance";
    yield "Bonus";
}

let benefitGenerator = benefits();

console.log("----- Employee Benefits -----");

for (let benefit of benefitGenerator) {
    console.log(benefit);
}

