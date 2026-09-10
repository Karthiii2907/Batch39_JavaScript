
// Task 1 — Student Result Analyzer

// Student details

let studentName = "Arun";
let department = "Computer Science";

let mark1 = 85;
let mark2 = 78;
let mark3 = 92;
let mark4 = 88;
let mark5 = 75;


// Function to calculate student result

function studentResult(name, department, m1, m2, m3, m4, m5) {

    // Calculate total marks

    let total = m1 + m2 + m3 + m4 + m5;

    // Calculate average

    let average = total / 5;

    // Check pass or fail

    let result;

    if (m1 >= 50 &&
        m2 >= 50 &&
        m3 >= 50 &&
        m4 >= 50 &&
        m5 >= 50) {

        result = "Pass";

    } else {

        result = "Fail";
    }


    // Assign grade

    let grade;

    if (average >= 90) {
        grade = "A";

    } else if (average >= 75) {
        grade = "B";

    } else if (average >= 60) {
        grade = "C";

    } else if (average >= 50) {
        grade = "D";

    } else {
        grade = "Fail";
    }


    // Display result

    console.log("----- Student Result -----");
    console.log("Name:", name);
    console.log("Department:", department);
    console.log("Total Marks:", total);
    console.log("Average:", average);
    console.log("Result:", result);
    console.log("Grade:", grade);
}


// Call function

studentResult(
    studentName,
    department,
    mark1,
    mark2,
    mark3,
    mark4,
    mark5
);


// Task 2 — Employee Salary Calculator

let employee = {
    name: "Arun",
    role: "Developer",
    salary: 45000,
    experience: 2
};


// Function to calculate salary

function calculateSalary(employee) {

    let basicSalary = employee.salary;

    let bonus = 0;

    // 15% bonus for experience 5 years or more

    if (employee.experience >= 5) {

        bonus = basicSalary * 0.15;

    }

    // 10% bonus for experience 2 years or more

    else if (employee.experience >= 2) {

        bonus = basicSalary * 0.10;

    }


    let finalSalary = basicSalary + bonus;


    console.log("----- Employee Salary -----");
    console.log("Name:", employee.name);
    console.log("Role:", employee.role);
    console.log("Basic Salary:", basicSalary);
    console.log("Bonus:", bonus);
    console.log("Final Salary:", finalSalary);

    return finalSalary;
}


// Call function

calculateSalary(employee);


// Task 3 — Product Filter System

let products = [
    {
        name: "Laptop",
        price: 55000,
        category: "electronics"
    },

    {
        name: "Mouse",
        price: 800,
        category: "electronics"
    },

    {
        name: "Shirt",
        price: 1200,
        category: "fashion"
    },

    {
        name: "Shoes",
        price: 2500,
        category: "fashion"
    },

    {
        name: "Phone",
        price: 30000,
        category: "electronics"
    }
];


// 1. Get products above ₹2,000

let productsAbove2000 = products.filter(function(product) {
    return product.price > 2000;
});

console.log("Products above ₹2000:", productsAbove2000);


// 2. Get only electronics

let electronics = products.filter(function(product) {
    return product.category === "electronics";
});

console.log("Electronics:", electronics);


// 3. Find first product below ₹1,000

let productBelow1000 = products.find(function(product) {
    return product.price < 1000;
});

console.log("First product below ₹1000:", productBelow1000);


// 4. Calculate total price

let totalProductPrice = products.reduce(function(total, product) {
    return total + product.price;
}, 0);

console.log("Total product price:", totalProductPrice);


// 5. Check whether any product costs more than ₹50,000

let expensiveProduct = products.some(function(product) {
    return product.price > 50000;
});

console.log("Any product above ₹50000:", expensiveProduct);


// 6. Check whether every product costs above ₹500

let allAbove500 = products.every(function(product) {
    return product.price > 500;
});

console.log("Every product above ₹500:", allAbove500);


// Task 4 — Employee Management

let employees = [

    {
        id: 101,
        name: "Kavin",
        role: "Frontend Developer",
        salary: 40000
    },

    {
        id: 102,
        name: "Arun",
        role: "Backend Developer",
        salary: 45000
    },

    {
        id: 103,
        name: "Priya",
        role: "UI Designer",
        salary: 55000
    },

    {
        id: 104,
        name: "Dinesh",
        role: "Full Stack Developer",
        salary: 60000
    },

    {
        id: 105,
        name: "Divya",
        role: "HR Executive",
        salary: 35000
    },

    {
        id: 106,
        name: "Rahul",
        role: "Software Engineer",
        salary: 50000
    }
];


// Display all employee names

let employeeNames = employees.map(function(employee) {
    return employee.name;
});

console.log("Employee Names:", employeeNames);


// Display employees earning above ₹40,000

let highSalaryEmployees = employees.filter(function(employee) {
    return employee.salary > 40000;
});

console.log("Employees earning above ₹40000:", highSalaryEmployees);


// Find employee with ID 103

let employee103 = employees.find(function(employee) {
    return employee.id === 103;
});

console.log("Employee with ID 103:", employee103);


// Calculate total salary

let totalEmployeeSalary = employees.reduce(function(total, employee) {
    return total + employee.salary;
}, 0);

console.log("Total Salary:", totalEmployeeSalary);


// Find highest-paid employee

let highestPaidEmployee = employees.reduce(function(highest, employee) {

    if (employee.salary > highest.salary) {
        return employee;
    }

    return highest;

});

console.log("Highest Paid Employee:", highestPaidEmployee);


// Sort employees from highest salary to lowest

let sortedEmployees = [...employees].sort(function(a, b) {
    return b.salary - a.salary;
});

console.log("Employees sorted by salary:", sortedEmployees);


// New array containing only employee names

let onlyNames = employees.map(function(employee) {
    return employee.name;
});

console.log("Only Employee Names:", onlyNames);


// Task 5 — Shopping Cart

let cart = [
    {
        name: "Laptop",
        price: 50000,
        quantity: 1
    },

    {
        name: "Mouse",
        price: 1000,
        quantity: 2
    },

    {
        name: "Keyboard",
        price: 2000,
        quantity: 1
    }
];


// Calculate item total

let itemTotals = cart.map(function(item) {

    return {
        name: item.name,
        itemTotal: item.price * item.quantity
    };

});

console.log("Item Totals:", itemTotals);


// Function to calculate cart

function calculateCart(cart) {

    let totalCartValue = cart.reduce(function(total, item) {

        return total + (item.price * item.quantity);

    }, 0);


    let discount = 0;


    // 10% discount if total is above ₹50,000

    if (totalCartValue > 50000) {

        discount = totalCartValue * 0.10;

    }


    let finalAmount = totalCartValue - discount;


    console.log("----- Shopping Cart -----");
    console.log("Total Cart Value:", totalCartValue);
    console.log("Discount:", discount);
    console.log("Final Payable Amount:", finalAmount);


    return finalAmount;
}


// Call function

calculateCart(cart);


// Task 6 — Student Search System

let studentList = [

    {
        name: "Arun",
        age: 21,
        mark: 85
    },

    {
        name: "Priya",
        age: 22,
        mark: 92
    },

    {
        name: "Karthi",
        age: 20,
        mark: 67
    },

    {
        name: "Dinesh",
        age: 23,
        mark: 45
    }
];


// 1. Display all student names

let allStudentNames = studentList.map(function(student) {
    return student.name;
});

console.log("Student Names:", allStudentNames);


// 2. Students who scored above 80

let studentsAbove80 = studentList.filter(function(student) {
    return student.mark > 80;
});

console.log("Students above 80:", studentsAbove80);


// 3. Find student named Priya

let priya = studentList.find(function(student) {
    return student.name === "Priya";
});

console.log("Student Priya:", priya);


// 4. Calculate average mark

let totalMarks = studentList.reduce(function(total, student) {
    return total + student.mark;
}, 0);

let averageMark = totalMarks / studentList.length;

console.log("Average Mark:", averageMark);


// 5. Check whether anyone failed

let anyoneFailed = studentList.some(function(student) {
    return student.mark < 50;
});

console.log("Anyone failed:", anyoneFailed);


// 6. Check whether everyone scored above 40

let everyoneAbove40 = studentList.every(function(student) {
    return student.mark > 40;
});

console.log("Everyone above 40:", everyoneAbove40);


// 7. Sort students by marks

let sortedStudents = [...studentList].sort(function(a, b) {
    return b.mark - a.mark;
});

console.log("Students sorted by marks:", sortedStudents);


// Task 7 — Array Transformation Challenge

let numbers = [12, 5, 8, 21, 44, 7, 30, 15];


// 1. Numbers multiplied by 2

let doubledNumbers = numbers.map(function(number) {
    return number * 2;
});

console.log("Numbers × 2:", doubledNumbers);


// 2. Get only even numbers

let evenNumbers = numbers.filter(function(number) {
    return number % 2 === 0;
});

console.log("Even Numbers:", evenNumbers);


// 3. Numbers greater than 15

let greaterThan15 = numbers.filter(function(number) {
    return number > 15;
});

console.log("Numbers greater than 15:", greaterThan15);


// 4. First number greater than 20

let firstGreaterThan20 = numbers.find(function(number) {
    return number > 20;
});

console.log("First number greater than 20:", firstGreaterThan20);


// 5. Total of all numbers

let numbersTotal = numbers.reduce(function(total, number) {
    return total + number;
}, 0);

console.log("Total:", numbersTotal);


// 6. Check whether any number is greater than 40

let anyGreaterThan40 = numbers.some(function(number) {
    return number > 40;
});

console.log("Any number greater than 40:", anyGreaterThan40);


// 7. Check whether every number is positive

let allPositive = numbers.every(function(number) {
    return number > 0;
});

console.log("Every number is positive:", allPositive);


// 8. Sort highest to lowest

let numbersDescending = [...numbers].sort(function(a, b) {
    return b - a;
});

console.log("Highest to Lowest:", numbersDescending);


// Task 8 — String Analyzer

// Ask user to enter a sentence

let sentence = prompt("Enter a sentence:");


// Total characters

console.log("Total Characters:", sentence.length);


// Uppercase sentence

console.log("Uppercase:", sentence.toUpperCase());


// Lowercase sentence

console.log("Lowercase:", sentence.toLowerCase());


// Check whether it contains JavaScript

console.log(
    "Contains JavaScript:",
    sentence.includes("JavaScript")
);


// First character

console.log("First Character:", sentence.slice(0, 1));


// Last character

console.log("Last Character:", sentence.slice(-1));


// Number of words

let words = sentence.trim().split(/\s+/);

console.log("Number of Words:", words.length);


// Replace JavaScript with Python

console.log(
    "Replaced Sentence:",
    sentence.replace("JavaScript", "Python")
);


// Convert sentence into array

console.log("Sentence Array:", sentence.split(" "));


// FINAL MINI PROJECT — Employee Dashboard

let dashboardEmployees = [

    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },

    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },

    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];


// 1. Employee List

console.log("----- Employee List -----");

dashboardEmployees.forEach(function(employee) {
    console.log(employee);
});


// 2. Search Employee by Name

let searchName = "Priya";

let searchedEmployee = dashboardEmployees.find(function(employee) {
    return employee.name === searchName;
});

console.log("Search Result:", searchedEmployee);


// 3. Department Filter

let departmentName = "IT";

let departmentEmployees = dashboardEmployees.filter(function(employee) {
    return employee.department === departmentName;
});

console.log("IT Employees:", departmentEmployees);


// 4. Salary Filter

let salaryEmployees = dashboardEmployees.filter(function(employee) {
    return employee.salary > 50000;
});

console.log("Employees earning above ₹50000:", salaryEmployees);


// 5. Salary Calculation

let companySalary = dashboardEmployees.reduce(function(total, employee) {
    return total + employee.salary;
}, 0);

console.log("Total Company Salary:", companySalary);


// 6. Highest Salary

let highestSalaryEmployee = dashboardEmployees.reduce(function(highest, employee) {

    if (employee.salary > highest.salary) {
        return employee;
    }

    return highest;

});

console.log("Highest Paid Employee:", highestSalaryEmployee);


// 7. Experience

let experiencedEmployees = dashboardEmployees.filter(function(employee) {
    return employee.experience > 3;
});

console.log("Employees with more than 3 years experience:", experiencedEmployees);


// 8. Sorting

// Low to High

let salaryLowToHigh = [...dashboardEmployees].sort(function(a, b) {
    return a.salary - b.salary;
});

console.log("Salary Low to High:", salaryLowToHigh);


// High to Low

let salaryHighToLow = [...dashboardEmployees].sort(function(a, b) {
    return b.salary - a.salary;
});

console.log("Salary High to Low:", salaryHighToLow);


// 9. Statistics

let totalEmployees = dashboardEmployees.length;

let totalSalary = dashboardEmployees.reduce(function(total, employee) {
    return total + employee.salary;
}, 0);

let highestSalary = highestSalaryEmployee.salary;

let averageSalary = totalSalary / totalEmployees;


console.log("----- Employee Statistics -----");

console.log("Total Employees:", totalEmployees);
console.log("Total Salary: ₹" + totalSalary);
console.log("Highest Salary: ₹" + highestSalary);
console.log("Average Salary: ₹" + Math.round(averageSalary));
