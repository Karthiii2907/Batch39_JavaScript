
// TASK 1 — VARIABLES

// Create variables using var, let and const

var studentName = "Karthik"

let studentAge = 25

const collegeName = "BMS College"


// Print all values

console.log(studentName)

console.log(studentAge)

console.log(collegeName)



// Change the var value

studentName = "Karthik M"

console.log(studentName)



// Change the let value

studentAge = 25

console.log(studentAge)



// Try redeclaring var

var studentName = "Karthik"

console.log(studentName)


// TASK 2 — PRINTING STATEMENTS

// console.log()

console.log("Hello JavaScript")


// alert()

alert("Welcome to JavaScript")


// confirm()

confirm("Do you want to continue?")


// prompt()

prompt("What is your name?")


// TASK 3 — USER DETAILS

// Get name

let userName = prompt("Enter your name")


// Get age

let userAge = prompt("Enter your age")


// Get city

let userCity = prompt("Enter your city")


// Get qualification

let userQualification = prompt("Enter your qualification")


// Print details in console

console.log("Name:", userName)

console.log("Age:", userAge)

console.log("City:", userCity)

console.log("Qualification:", userQualification)



// TASK 4 — FIND DATA TYPES


// Create variables

let programmingLanguage = "JavaScript"

let wholeNumber = 100

let decimalNumber = 99.5

let trueValue = true

let falseValue = false

let undefinedValue

let nullValue = null


// Print values

console.log(programmingLanguage)

console.log(wholeNumber)

console.log(decimalNumber)

console.log(trueValue)

console.log(falseValue)

console.log(undefinedValue)

console.log(nullValue)


// Print data types

console.log(typeof programmingLanguage)

console.log(typeof wholeNumber)

console.log(typeof decimalNumber)

console.log(typeof trueValue)

console.log(typeof falseValue)

console.log(typeof undefinedValue)

console.log(typeof nullValue)



// TASK 5 — STUDENT ARRAY

// Create student array

let students = [
    "Arun",
    "Priya",
    "Kumar",
    "Divya",
    "Rahul"
]


// First student

console.log(students[0])


// Second student

console.log(students[1])


// Last student

console.log(students[students.length - 1])


// Total students

console.log(students.length)



// TASK 6 — EMPLOYEE OBJECT

// Create employee object

let employee = {
    name: "Karthik",
    age: 22,
    role: "Full Stack Developer",
    skills: [
        "HTML",
        "CSS",
        "JavaScript"
    ],
    isWorking: true,
    qualification: [
        "B.E",
        "Full Stack Development"
    ]
}


// Employee name

console.log(employee.name)


// Employee age

console.log(employee.age)


// Employee role

console.log(employee.role)


// First skill

console.log(employee.skills[0])


// Last qualification

console.log(employee.qualification[employee.qualification.length - 1])


// Working status

console.log(employee.isWorking)


// TASK 7 — CALCULATOR

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



// TASK 8 — SHOPPING BILL

// Create product prices

let shirt = 999

let pant = 1499

let shoes = 1999

let bag = 799


// Calculate total

let totalPrice = shirt + pant + shoes + bag


// Print total

console.log("Total Price:", totalPrice)


// TASK 9 — INCREMENT & DECREMENT

// A — Post Increment

let incrementA = 10

let incrementB = incrementA++

console.log(incrementA)

console.log(incrementB)


// B — Pre Increment

let preIncrementA = 10

let preIncrementB = ++preIncrementA

console.log(preIncrementA)

console.log(preIncrementB)


// C — Post Decrement

let decrementA = 10

let decrementB = decrementA--

console.log(decrementA)

console.log(decrementB)


// D — Pre Decrement

let preDecrementA = 10

let preDecrementB = --preDecrementA

console.log(preDecrementA)

console.log(preDecrementB)


// TASK 10 — ASSIGNMENT OPERATORS

// Start with 10

let num = 10

// +=

num += 5

console.log("After +=:", num)

// Reset

num = 10

// -=

num -= 3

console.log("After -=:", num)

// Reset

num = 10

// *=

num *= 2

console.log("After *=:", num)

// Reset

num = 10

// /=

num /= 4

console.log("After /=:", num)

// Reset

num = 10

// %=

num %= 3

console.log("After %=:", num)

// Reset

num = 10

// **=

num **= 2

console.log("After **=:", num)


// TASK 11 — COMPARISON OPERATORS

// Predict the output before running

console.log(10 > 5)

console.log(10 < 5)

console.log(10 >= 10)

console.log(10 <= 9)

console.log(5 == "5")

console.log(5 === "5")

console.log(10 != "10")

console.log(10 !== "10")


// TASK 12 — LOGICAL AND

// Predict the output

console.log(true && true)

console.log(true && false)

console.log(false && true)

console.log(false && false)


// TASK 13 — LOGICAL OR

// Predict the output

console.log(true || true)

console.log(true || false)

console.log(false || true)

console.log(false || false)


// TASK 14 — LOGICAL NOT

// Predict the output

console.log(!true)

console.log(!false)

console.log(!(5 > 10))

console.log(!(10 > 5))


// TASK 15 — COMBINATION

// Predict the output before executing


console.log(5 == "5" && !(5 === 5) || 6 > 7)

console.log(10 > 5 && 8 < 12 || 4 === "4")

console.log(7 === 7 && 10 != "10" || 5 >= 5)

console.log(15 < 10 || 20 > 15 && 5 == "5")


// TASK 16 — TERNARY OPERATOR — VOTING

// Create age

let votingAge = 20

// Use ternary operator

let votingResult = votingAge >= 18
    ? "Eligible to vote"
    : "Not eligible"


// Print result

console.log(votingResult)

// TASK 17 — TERNARY OPERATOR — PASSWORD

// Create password status

let password = true


// Use ternary operator

let loginResult = password
    ? "Login successful"
    : "Wrong password"


// Print result

console.log(loginResult)


// TASK 18 — CONCATENATION & TEMPLATE STRING


// Create variables

let introName = "Naveen"

let introAge = 25

let introCity = "Trichy"

// Using + operator

console.log(
    "My name is " + introName +
    ". I am " + introAge +
    " years old. I live in " + introCity + "."
)


// Using template literals

console.log(
    `My name is ${introName}. I am ${introAge} years old. I live in ${introCity}.`
)


// TASK 19 — STRING CONVERSION

// Convert 100

let stringNumber = String(100)

console.log(stringNumber)

console.log(typeof stringNumber)

// Convert true

let stringTrue = String(true)

console.log(stringTrue)

console.log(typeof stringTrue)


// Convert undefined

let stringUndefined = String(undefined)

console.log(stringUndefined)

console.log(typeof stringUndefined)


// Convert null

let stringNull = String(null)

console.log(stringNull)

console.log(typeof stringNull)


// Convert array

let stringArray = String([1, 2])

console.log(stringArray)

console.log(typeof stringArray)


// TASK 20 — NUMBER CONVERSION

// Predict the output

console.log(Number())

console.log(Number(""))

console.log(Number("123"))

console.log(Number("a1"))

console.log(Number(true))

console.log(Number(false))

console.log(Number(undefined))

console.log(Number(null))


// TASK 21 — BOOLEAN CONVERSION

// Predict the output

console.log(Boolean())

console.log(Boolean(""))

console.log(Boolean("hello"))

console.log(Boolean(123))

console.log(Boolean(true))

console.log(Boolean(false))

console.log(Boolean(undefined))

console.log(Boolean(null))

console.log(Boolean([]))

console.log(Boolean({}))


// TASK 22 — VOTING ELIGIBILITY

// Get age from user

let voteAge = Number(prompt("Enter your age"))


// Check voting eligibility

if (voteAge >= 18) {

    console.log("You can vote")

} else {

    console.log("You can't vote")

}


// TASK 23 — POSITIVE OR NEGATIVE


// Get number from user

let checkNumber = Number(prompt("Enter a number"))


// Check number

if (checkNumber > 0) {

    console.log("Positive")

} else if (checkNumber < 0) {

    console.log("Negative")

} else {

    console.log("Zero")

}

// TASK 24 — GRADE SYSTEM

// Get marks from user

let marks = Number(prompt("Enter your marks"))


// Check grade

if (marks >= 90 && marks <= 100) {

    console.log("A Grade")

} else if (marks >= 80 && marks <= 89) {

    console.log("B Grade")

} else if (marks >= 70 && marks <= 79) {

    console.log("C Grade")

} else if (marks >= 60 && marks <= 69) {

    console.log("D Grade")

} else if (marks < 60) {

    console.log("Fail")

} else {

    console.log("Invalid Marks")

}


// TASK 25 — JOB ELIGIBILITY


// Get age

let jobAge = Number(prompt("Enter your age"))


// Get height

let jobHeight = Number(prompt("Enter your height"))


// Get weight

let jobWeight = Number(prompt("Enter your weight"))


// Check eligibility

if (jobAge >= 18) {

    if (jobHeight >= 160) {

        if (jobWeight >= 60) {

            console.log("Congratulations! You are selected")

        } else {

            console.log("Your weight is below 60")

        }

    } else {

        console.log("Your height is below 160")

    }

} else {

    console.log("Your age is below 18")

}

// TASK 26 — SWITCH — TRAFFIC LIGHT

// Get traffic light color

let trafficColor = prompt("Enter traffic light color")


// Convert to lowercase

trafficColor = trafficColor.toLowerCase()


// Switch statement

switch (trafficColor) {

    case "red":
        console.log("Stop")
        break

    case "yellow":
        console.log("Ready")
        break

    case "green":
        console.log("Go")
        break

    default:
        console.log("Invalid color")

}

// TASK 27 — SWITCH — DAY

// Create day

let day = 1


// Switch statement

switch (day) {

    case 1:
        console.log("Monday")
        break

    case 2:
        console.log("Tuesday")
        break

    case 3:
        console.log("Wednesday")
        break

    case 4:
        console.log("Thursday")
        break

    case 5:
        console.log("Friday")
        break

    case 6:
        console.log("Saturday")
        break

    case 7:
        console.log("Sunday")
        break

    default:
        console.log("Invalid day")

}


// TASK 28 — FINAL MINI PROJECT
// STUDENT RESULT SYSTEM


// Step 1 — Get user details


// Get name

let resultName = prompt("Enter student name")


// Get age

let resultAge = Number(prompt("Enter student age"))


// Get city

let resultCity = prompt("Enter student city")



// Step 2 — Get marks


// Tamil

let tamilMarks = Number(prompt("Enter Tamil marks"))


// English

let englishMarks = Number(prompt("Enter English marks"))


// Maths

let mathsMarks = Number(prompt("Enter Maths marks"))



// Step 3 — Calculate total


let resultTotal = tamilMarks + englishMarks + mathsMarks


// Calculate average

let resultAverage = resultTotal / 3



// Step 4 — Check grade


let resultGrade


if (resultAverage >= 90) {

    resultGrade = "A"

} else if (resultAverage >= 80) {

    resultGrade = "B"

} else if (resultAverage >= 70) {

    resultGrade = "C"

} else if (resultAverage >= 60) {

    resultGrade = "D"

} else {

    resultGrade = "Fail"

}



// Step 5 — Check voting


let votingStatus


if (resultAge >= 18) {

    votingStatus = "Eligible"

} else {

    votingStatus = "Not Eligible"

}



// Step 6 — Display using template string


console.log(`
Name: ${resultName}
Age: ${resultAge}
City: ${resultCity}
Total: ${resultTotal}
Average: ${resultAverage}
Grade: ${resultGrade}
Voting: ${votingStatus}
`)