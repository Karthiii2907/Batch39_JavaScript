// JavaScript Tasks

// TASK 1 — var, let, const


// Create three variables

var studentName = "Karthik"

let studentAge = 22

const collegeName = "BMS College"


// Print all three values

console.log(studentName)

console.log(studentAge)

console.log(collegeName)



// Change the var value

studentName = "Karthik M"

console.log(studentName)



// Change the let value

studentAge = 23

console.log(studentAge)




// Try redeclaring the var variable

var studentName = "Karthi"

console.log(studentName)



// TASK 2 — User Information


// Get name from user

let userName = prompt("Enter your name")


// Get age from user

let userAge = prompt("Enter your age")


// Get city from user

let userCity = prompt("Enter your city")


// Print the result in console

console.log("Name:", userName)

console.log("Age:", userAge)

console.log("City:", userCity)



// TASK 3 — Welcome Message


// Get user's name

let welcomeName = prompt("Enter your name")


// Display welcome message

alert("Welcome " + welcomeName + "!")



// TASK 4 — Age Calculator


// Ask the user for birth year

let birthYear = prompt("Enter your birth year")


// Current year

let currentYear = 2026


// Calculate age

let calculatedAge = currentYear - birthYear


// Print age

console.log("Birth Year:", birthYear)

console.log("Age:", calculatedAge)



// TASK 5 — Identify Data Types


// Create variables with different data types

let text = "Hello"

let wholeNumber = 100

let decimalNumber = 25.5

let trueValue = true

let falseValue = false

let undefinedValue

let nullValue = null


// Print each data type

console.log(typeof text)

console.log(typeof wholeNumber)

console.log(typeof decimalNumber)

console.log(typeof trueValue)

console.log(typeof falseValue)

console.log(typeof undefinedValue)

console.log(typeof nullValue)



// TASK 6 — Student Data


// Create a student object

let student = {
    name: "Karthik",
    age: 25,
    city: "Bengaluru",
    qualification: "B.E",
    isStudent: true
}


// Print complete object

console.log(student)


// Print name

console.log(student.name)


// Print age

console.log(student.age)


// Print qualification

console.log(student.qualification)


// Print isStudent

console.log(student.isStudent)



// TASK 7 — Fruit Array


// Create an array containing 6 fruits

let fruits = [
    "Apple",
    "Mango",
    "Orange",
    "Banana",
    "Grapes",
    "Papaya"
]


// Print first fruit

console.log(fruits[0])


// Print second fruit

console.log(fruits[1])


// Print last fruit

console.log(fruits[fruits.length - 1])


// Print total number of fruits

console.log(fruits.length)



// TASK 8 — Basic Calculator


// Create two numbers

let a = 20

let b = 5


// Addition

console.log("Addition:", a + b)


// Subtraction

console.log("Subtraction:", a - b)


// Multiplication

console.log("Multiplication:", a * b)


// Division

console.log("Division:", a / b)


// Modulus

console.log("Modulus:", a % b)


// Exponentiation

console.log("Exponentiation:", a ** b)



// TASK 9 — Shopping Bill


// Create product prices

let shirt = 999

let pant = 1499

let shoes = 1999


// Calculate total price

let totalPrice = shirt + pant + shoes


// Print total

console.log("Total:", totalPrice)



// TASK 10 — Simple Marks Calculation


// Create marks for three subjects

let tamil = 80

let english = 75

let maths = 90


// Calculate total marks

let totalMarks = tamil + english + maths


// Calculate average marks

let averageMarks = totalMarks / 3


// Print total

console.log("Total Marks:", totalMarks)


// Print average

console.log("Average Marks:", averageMarks)



// TASK 11 — Post Increment


// Predict the output before running

let postIncrementA = 10

let postIncrementB = postIncrementA++


console.log(postIncrementA)

console.log(postIncrementB)


// Expected Output:
// 11
// 10



// TASK 12 — Pre Increment


// Predict the output before running

let preIncrementA = 10

let preIncrementB = ++preIncrementA


console.log(preIncrementA)

console.log(preIncrementB)


// Expected Output:
// 11
// 11



// TASK 13 — Post Decrement


// Predict the output before running

let postDecrementA = 20

let postDecrementB = postDecrementA--


console.log(postDecrementA)

console.log(postDecrementB)


// Expected Output:
// 19
// 20



// TASK 14 — Pre Decrement


// Predict the output before running

let preDecrementA = 20

let preDecrementB = --preDecrementA


console.log(preDecrementA)

console.log(preDecrementB)


// Expected Output:
// 19
// 19



// TASK 15 — Find the Final Values


// Find the output before running

let challengeA = 5

let challengeB = challengeA++

let challengeC = ++challengeA

let challengeD = challengeB--


console.log(challengeA)

console.log(challengeB)

console.log(challengeC)

console.log(challengeD)


// Expected Output:
// 7
// 5
// 7
// 5



// TASK 16 — Assignment Operators


// += operator

let num = 10

num += 5

console.log("After +=:", num)


// Expected Output:
// 15



// -= operator

num = 10

num -= 5

console.log("After -=:", num)


// Expected Output:
// 5



// *= operator

num = 10

num *= 5

console.log("After *=:", num)


// Expected Output:
// 50



// /= operator

num = 10

num /= 5

console.log("After /=:", num)


// Expected Output:
// 2



// %= operator

num = 10

num %= 5

console.log("After %=:", num)


// Expected Output:
// 0



// **= operator

num = 10

num **= 2

console.log("After **=:", num)


// Expected Output:
// 100



// TASK 17 — Mini Student Profile


// Student variables

let profileName = "Karthik"

let profileAge = 25

let profileCity = "Bengaluru"

let profileCollege = "BMS College"


// Create an array with 5 favorite subjects

let subjects = [
    "JavaScript",
    "Python",
    "HTML",
    "CSS",
    "SQL"
]


// Create student object

let studentProfile = {
    name: profileName,
    age: profileAge,
    city: profileCity,
    subjects: subjects,
    isStudent: true
}


// Print student name

console.log("Student Name:", studentProfile.name)


// Print student age

console.log("Student Age:", studentProfile.age)


// Print city

console.log("City:", studentProfile.city)


// Print first subject

console.log("First Subject:", subjects[0])


// Print last subject

console.log("Last Subject:", subjects[subjects.length - 1])


// Print total subjects

console.log("Total Subjects:", subjects.length)


// Print complete object

console.log(studentProfile)



// FINAL CHALLENGE — User + Calculator


// Get first number from user

let firstNumber = prompt("Enter first number")


// Get second number from user

let secondNumber = prompt("Enter second number")


// Convert the user input into numbers

firstNumber = Number(firstNumber)

secondNumber = Number(secondNumber)


// Addition

console.log("Addition:", firstNumber + secondNumber)


// Subtraction

console.log("Subtraction:", firstNumber - secondNumber)


// Multiplication

console.log("Multiplication:", firstNumber * secondNumber)


// Division

console.log("Division:", firstNumber / secondNumber)


// Modulus

console.log("Modulus:", firstNumber % secondNumber)


// Power

console.log("Power:", firstNumber ** secondNumber)