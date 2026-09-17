// EMPLOYEE MANAGEMENT SYSTEM


// === API 

const apiUrl =
    "https://dummyjson.com/users";


// === VARIABLES 

let employees = [];

let selectedDepartment = "All";


// === DOM ELEMENTS 

const employeeContainer =
    document.getElementById(
        "employeeContainer"
    );

const employeeCount =
    document.getElementById(
        "employeeCount"
    );

const loadingMessage =
    document.getElementById(
        "loadingMessage"
    );

const statusMessage =
    document.getElementById(
        "statusMessage"
    );

const searchInput =
    document.getElementById(
        "searchInput"
    );

const searchButton =
    document.getElementById(
        "searchButton"
    );

const sortSelect =
    document.getElementById(
        "sortSelect"
    );

const employeeForm =
    document.getElementById(
        "employeeForm"
    );

const formError =
    document.getElementById(
        "formError"
    );

const currentDate =
    document.getElementById(
        "currentDate"
    );

const currentTime =
    document.getElementById(
        "currentTime"
    );


// == SALARY ELEMENTS 

const totalEmployees =
    document.getElementById(
        "totalEmployees"
    );

const totalSalary =
    document.getElementById(
        "totalSalary"
    );

const averageSalary =
    document.getElementById(
        "averageSalary"
    );

const highestSalary =
    document.getElementById(
        "highestSalary"
    );

const highestEmployee =
    document.getElementById(
        "highestEmployee"
    );


// DEPARTMENT MAPPING

function getDepartment(apiDepartment) {

    const department =
        apiDepartment.toLowerCase();


    if (
        department.includes("engineer") ||
        department.includes("development") ||
        department.includes("research") ||
        department.includes("technical")
    ) {

        return "IT";

    }


    if (
        department.includes("human") ||
        department.includes("support") ||
        department.includes("people")
    ) {

        return "HR";

    }


    if (
        department.includes("finance") ||
        department.includes("account") ||
        department.includes("billing")
    ) {

        return "Finance";

    }


    return "Marketing";
}


// FETCH EMPLOYEES

function fetchEmployees() {

    loadingMessage.textContent =
        "Loading employee data...";


    fetch(apiUrl)

        .then(function(response) {

            if (!response.ok) {

                throw new Error(
                    "Failed to fetch employee data"
                );

            }

            return response.json();

        })


        .then(function(data) {

            employees =
                data.users.map(
                    function(user) {

                        // Destructuring

                        const {
                            id,
                            firstName,
                            lastName,
                            age,
                            email,
                            phone,
                            image,
                            company
                        } = user;


                        // DummyJSON doesn't
                        // provide salary.
                        // Therefore we create
                        // demo salary data.

                        const salary =
                            30000 +
                            (age * 500);


                        return {

                            id: id,

                            name:
                                `${firstName} ${lastName}`,

                            age: age,

                            email: email,

                            phone: phone,

                            image: image,

                            company:
                                company.name,

                            department:
                                getDepartment(
                                    company.department
                                ),

                            salary: salary

                        };

                    }
                );


            displayEmployees(
                employees
            );


            statusMessage.textContent =
                "Employee data loaded successfully.";

        })


        .catch(function(error) {

            console.error(error);


            statusMessage.textContent =
                "Unable to load employee data.";


            employeeContainer.innerHTML = `

                <p class="error-message">

                    Error loading employees.
                    Please check your internet connection.

                </p>

            `;

        })


        .finally(function() {

            loadingMessage.textContent = "";

        });

}


// DISPLAY EMPLOYEES

function displayEmployees(employeeList) {

    employeeContainer.innerHTML = "";


    updateEmployeeCount(
        employeeList
    );


    // some()

    const hasYoungEmployee =
        employeeList.some(
            function(employee) {

                return employee.age < 25;

            }
        );


    // every()

    const allHaveEmail =
        employeeList.every(
            function(employee) {

                return employee.email !== "";

            }
        );


    console.log(
        "Has employee below 25:",
        hasYoungEmployee
    );


    console.log(
        "All employees have email:",
        allHaveEmail
    );


    employeeList.forEach(
        function(employee) {

            const card =
                document.createElement(
                    "div"
                );


            card.className =
                "employee-card";


            card.setAttribute(
                "data-id",
                employee.id
            );


            card.innerHTML = `

                <img
                    class="employee-image"
                    src="${employee.image}"
                    alt="Employee Image"
                >


                <h3>
                    ${employee.name}
                </h3>


                <div
                    class="employee-details">

                    <p>
                        <strong>
                            Age:
                        </strong>

                        ${employee.age}

                    </p>


                    <p>
                        <strong>
                            Email:
                        </strong>

                        ${employee.email}

                    </p>


                    <p>
                        <strong>
                            Phone:
                        </strong>

                        ${employee.phone}

                    </p>


                    <p>
                        <strong>
                            Company:
                        </strong>

                        ${employee.company}

                    </p>


                    <p>
                        <strong>
                            Department:
                        </strong>

                        <span
                            class="department-badge">

                            ${employee.department}

                        </span>

                    </p>


                    <p>
                        <strong>
                            Salary:
                        </strong>

                        ${formatCurrency(
                            employee.salary
                        )}

                    </p>

                </div>


                <button
                    class="delete-button"
                    data-id="${employee.id}">

                    Delete

                </button>

            `;


            employeeContainer.appendChild(
                card
            );


            const deleteButton =
                card.querySelector(
                    ".delete-button"
                );


            deleteButton.addEventListener(
                "click",
                function() {

                    deleteEmployee(
                        employee.id
                    );

                }
            );

        }
    );


    calculateSalary(
        employeeList
    );

}


// EMPLOYEE COUNT

function updateEmployeeCount(
    employeeList
) {

    employeeCount.textContent =
        employeeList.length;

}


// SEARCH

function searchEmployees() {

    const searchText =
        searchInput.value
            .trim()
            .toLowerCase();


    let filteredEmployees =
        employees.filter(
            function(employee) {

                return employee.name
                    .toLowerCase()
                    .includes(searchText);

            }
        );


    if (
        selectedDepartment !==
        "All"
    ) {

        filteredEmployees =
            filteredEmployees.filter(
                function(employee) {

                    return (
                        employee.department ===
                        selectedDepartment
                    );

                }
            );

    }


    displayEmployees(
        filteredEmployees
    );

}


// DEPARTMENT FILTER

const departmentButtons =
    document.querySelectorAll(
        ".department-btn"
    );


departmentButtons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {

                departmentButtons.forEach(
                    function(btn) {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                selectedDepartment =
                    button.getAttribute(
                        "data-department"
                    );


                searchEmployees();

            }
        );

    }
);


// ADD EMPLOYEE

function addEmployee() {

    const name =
        document.getElementById(
            "employeeName"
        ).value.trim();


    const age =
        Number(
            document.getElementById(
                "employeeAge"
            ).value
        );


    const email =
        document.getElementById(
            "employeeEmail"
        ).value.trim();


    const department =
        document.getElementById(
            "employeeDepartment"
        ).value;


    const salary =
        Number(
            document.getElementById(
                "employeeSalary"
            ).value
        );


    const validation =
        validateEmployee(
            name,
            age,
            email,
            department,
            salary
        );


    if (!validation.valid) {

        formError.textContent =
            validation.message;

        return;

    }


    const newEmployee = {

        id: Date.now(),

        name: name,

        age: age,

        email: email,

        phone: "Not provided",

        company: "New Employee",

        department: department,

        salary: salary,

        image:
            "https://dummyjson.com/icon/employee/128"

    };


    employees.push(
        newEmployee
    );


    clearForm();


    formError.textContent = "";


    selectedDepartment = "All";


    departmentButtons.forEach(
        function(button) {

            button.classList.remove(
                "active"
            );


            if (
                button.getAttribute(
                    "data-department"
                ) === "All"
            ) {

                button.classList.add(
                    "active"
                );

            }

        }
    );


    searchInput.value = "";


    displayEmployees(
        employees
    );


    statusMessage.textContent =
        "Employee added successfully.";

}


// VALIDATION

function validateEmployee(
    name,
    age,
    email,
    department,
    salary
) {

    if (name === "") {

        return {

            valid: false,

            message:
                "Please enter employee name."

        };

    }


    if (
        isNaN(age) ||
        age <= 18
    ) {

        return {

            valid: false,

            message:
                "Employee age must be above 18."

        };

    }


    if (email === "") {

        return {

            valid: false,

            message:
                "Please enter employee email."

        };

    }


    if (department === "") {

        return {

            valid: false,

            message:
                "Please select a department."

        };

    }


    if (
        isNaN(salary) ||
        salary <= 0
    ) {

        return {

            valid: false,

            message:
                "Please enter a valid salary."

        };

    }


    return {

        valid: true,

        message: ""

    };

}


// DELETE EMPLOYEE

function deleteEmployee(id) {

    employees =
        employees.filter(
            function(employee) {

                return employee.id !== id;

            }
        );


    searchEmployees();


    statusMessage.textContent =
        "Employee deleted successfully.";

}


// CLEAR FORM

function clearForm() {

    employeeForm.reset();

}


// SALARY CALCULATIONS

function calculateSalary(
    employeeList
) {

    const count =
        employeeList.length;


    const salaryTotal =
        employeeList.reduce(
            function(total, employee) {

                return (
                    total +
                    employee.salary
                );

            },
            0
        );


    let average = 0;


    if (count > 0) {

        average =
            salaryTotal /
            count;

    }


    let highestPaid = null;


    if (
        employeeList.length > 0
    ) {

        highestPaid =
            employeeList.reduce(
                function(
                    highest,
                    employee
                ) {

                    if (
                        employee.salary >
                        highest.salary
                    ) {

                        return employee;

                    }

                    return highest;

                }
            );

    }


    totalEmployees.textContent =
        count;


    totalSalary.textContent =
        formatCurrency(
            salaryTotal
        );


    averageSalary.textContent =
        formatCurrency(
            Math.round(
                average
            )
        );


    if (highestPaid) {

        highestSalary.textContent =
            formatCurrency(
                highestPaid.salary
            );


        highestEmployee.innerHTML = `

            <div class="highest-name">

                ${highestPaid.name}

            </div>


            <div>

                Department:

                <strong>
                    ${highestPaid.department}
                </strong>

            </div>


            <div>

                Salary:

                <strong>

                    ${formatCurrency(
                        highestPaid.salary
                    )}

                </strong>

            </div>

        `;

    }

    else {

        highestSalary.textContent =
            "₹0";


        highestEmployee.textContent =
            "No employee data available.";

    }

}


// SORT

function sortEmployees(
    sortType
) {

    let sortedEmployees =
        [...employees];


    if (
        sortType ===
        "nameAsc"
    ) {

        sortedEmployees.sort(
            function(a, b) {

                return a.name.localeCompare(
                    b.name
                );

            }
        );

    }


    else if (
        sortType ===
        "nameDesc"
    ) {

        sortedEmployees.sort(
            function(a, b) {

                return b.name.localeCompare(
                    a.name
                );

            }
        );

    }


    else if (
        sortType ===
        "ageAsc"
    ) {

        sortedEmployees.sort(
            function(a, b) {

                return a.age - b.age;

            }
        );

    }


    else if (
        sortType ===
        "ageDesc"
    ) {

        sortedEmployees.sort(
            function(a, b) {

                return b.age - a.age;

            }
        );

    }


    else if (
        sortType ===
        "salaryAsc"
    ) {

        sortedEmployees.sort(
            function(a, b) {

                return a.salary - b.salary;

            }
        );

    }


    else if (
        sortType ===
        "salaryDesc"
    ) {

        sortedEmployees.sort(
            function(a, b) {

                return b.salary - a.salary;

            }
        );

    }


    const searchText =
        searchInput.value
            .trim()
            .toLowerCase();


    if (
        searchText !== ""
    ) {

        sortedEmployees =
            sortedEmployees.filter(
                function(employee) {

                    return employee.name
                        .toLowerCase()
                        .includes(searchText);

                }
            );

    }


    if (
        selectedDepartment !==
        "All"
    ) {

        sortedEmployees =
            sortedEmployees.filter(
                function(employee) {

                    return (
                        employee.department ===
                        selectedDepartment
                    );

                }
            );

    }


    displayEmployees(
        sortedEmployees
    );

}

// EVENTS

searchButton.addEventListener(
    "click",
    searchEmployees
);


searchInput.addEventListener(
    "input",
    searchEmployees
);


sortSelect.addEventListener(
    "change",
    function() {

        sortEmployees(
            sortSelect.value
        );

    }
);


employeeForm.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        addEmployee();

    }
);


// DATE AND TIME

function updateDateTime() {

    const now =
        new Date();


    const day =
        now.getDate();


    const monthNames = [

        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"

    ];


    const month =
        monthNames[
            now.getMonth()
        ];


    const year =
        now.getFullYear();


    let hours =
        now.getHours();


    const minutes =
        String(
            now.getMinutes()
        ).padStart(
            2,
            "0"
        );


    const seconds =
        String(
            now.getSeconds()
        ).padStart(
            2,
            "0"
        );


    const period =
        hours >= 12
            ? "PM"
            : "AM";


    hours =
        hours % 12 || 12;


    currentDate.textContent =
        `${day} ${month} ${year}`;


    currentTime.textContent =
        `${hours}:${minutes}:${seconds} ${period}`;

}

// CURRENCY

function formatCurrency(
    amount
) {

    return new Intl.NumberFormat(
        "en-IN",
        {

            style: "currency",

            currency: "INR",

            maximumFractionDigits: 0

        }
    ).format(amount);

}

// START APPLICATION

updateDateTime();


setInterval(
    updateDateTime,
    1000
);


setTimeout(
    fetchEmployees,
    500
);