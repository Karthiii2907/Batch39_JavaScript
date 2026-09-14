
// Task 1 — FakeStore API

let apiUrl = "https://fakestoreapi.com/products";

fetch(apiUrl)

    // Convert response into JSON

    .then(function(response) {

        return response.json();

    })

    // Work with the product data

    .then(function(products) {

        console.log("===== ALL PRODUCTS =====");


        // Display product title, price and category

        products.forEach(function(product) {

            console.log("Title:", product.title);
            console.log("Price: $" + product.price);
            console.log("Category:", product.category);
            console.log("------------------------");

        });


        // Use map() to create title and price array

        let titlePriceArray = products.map(function(product) {

            return {
                title: product.title,
                price: product.price
            };

        });

        console.log("===== TITLE AND PRICE =====");
        console.log(titlePriceArray);


        // Use filter() for products above $100

        let expensiveProducts = products.filter(function(product) {

            return product.price > 100;

        });

        console.log("===== PRODUCTS ABOVE $100 =====");
        console.log(expensiveProducts);


        // Use find() for first electronics product

        let electronicsProduct = products.find(function(product) {

            return product.category === "electronics";

        });

        console.log("===== FIRST ELECTRONICS PRODUCT =====");
        console.log(electronicsProduct);


        // Use reduce() to calculate total price

        let totalPrice = products.reduce(function(total, product) {

            return total + product.price;

        }, 0);

        console.log("===== TOTAL PRICE =====");
        console.log("$" + totalPrice.toFixed(2));

        // Use sort() to arrange highest to lowest

        let sortedProducts = [...products].sort(function(a, b) {

            return b.price - a.price;

        });

        console.log("===== HIGHEST TO LOWEST =====");
        console.log(sortedProducts);

    })

    // Handle API errors

    .catch(function(error) {

        console.log("API Error:", error);

    })

    // Completion message

    .finally(function() {

        console.log("===== TASK 1 COMPLETED =====");

    });


// Task 2 — Product Category Dashboard

fetch(apiUrl)

    .then(function(response) {

        return response.json();

    })

    .then(function(products) {


        // Function to count products by category

        function countCategory(category) {

            return products.filter(function(product) {

                return product.category === category;

            }).length;

        }

        // Total products

        let totalProducts = products.length;

        // Category counts

        let electronicsCount = countCategory("electronics");

        let jeweleryCount = countCategory("jewelery");

        let mensCount = countCategory("men's clothing");

        let womensCount = countCategory("women's clothing");

        // Highest price

        let highestProduct = products.reduce(function(highest, product) {

            if (product.price > highest.price) {

                return product;

            }

            return highest;

        });

        // Lowest price

        let lowestProduct = products.reduce(function(lowest, product) {

            if (product.price < lowest.price) {

                return product;

            }

            return lowest;

        });

        // Total price

        let total = products.reduce(function(sum, product) {

            return sum + product.price;

        }, 0);


        // Average price

        let average = total / products.length;


        // Sort products from highest to lowest

        let sorted = [...products].sort(function(a, b) {

            return b.price - a.price;

        });

        // Display dashboard

        console.log(`
===== PRODUCT DASHBOARD =====

Total Products: ${totalProducts}

Electronics: ${electronicsCount}
Jewelery: ${jeweleryCount}
Men's Clothing: ${mensCount}
Women's Clothing: ${womensCount}

Highest Price: $${highestProduct.price}
Lowest Price: $${lowestProduct.price}
Average Price: $${average.toFixed(2)}

Highest → Lowest:
`);

        sorted.forEach(function(product) {

            console.log(
                product.title + " - $" + product.price
            );

        });

    })

    .catch(function(error) {

        console.log("Dashboard Error:", error);

    })

    .finally(function() {

        console.log("===== TASK 2 COMPLETED =====");

    });

// Task 3 — User & Post API

let usersApi = "https://jsonplaceholder.typicode.com/users";

let postsApi = "https://jsonplaceholder.typicode.com/posts";


// Fetch Users

fetch(usersApi)

    .then(function(response) {

        return response.json();

    })

    .then(function(users) {

        console.log("===== USERS =====");


        // 1. Display all user names

        console.log("----- User Names -----");

        users.forEach(function(user) {

            console.log(user.name);

        });

        // 2. Display name + email

        console.log("----- Name + Email -----");

        users.forEach(function(user) {

            console.log(
                user.name + " - " + user.email
            );

        });

        // 3. Find user with ID 5

        let userFive = users.find(function(user) {

            return user.id === 5;

        });

        console.log("----- User ID 5 -----");
        console.log(userFive);

        // 4. Filter users from a particular city

        let cityUsers = users.filter(function(user) {

            return user.address.city === "South Christy";

        });

        console.log("----- Users from South Christy -----");
        console.log(cityUsers);

        // Fetch Posts

        return fetch(postsApi);

    })

    .then(function(response) {

        return response.json();

    })

    .then(function(posts) {

        // 6. Display posts written by user ID 1

        let userOnePosts = posts.filter(function(post) {

            return post.userId === 1;

        });

        console.log("===== POSTS BY USER ID 1 =====");

        userOnePosts.forEach(function(post) {

            console.log(post.title);

        });

        // 7. Count posts created by user ID 1

        console.log(
            "Total Posts by User 1:",
            userOnePosts.length
        );

        // 8. Find first post with title longer than 50 characters

        let longTitlePost = posts.find(function(post) {

            return post.title.length > 50;

        });

        console.log(
            "First Post With Title Above 50 Characters:"
        );

        console.log(longTitlePost);

    })

    .catch(function(error) {

        console.log("User/Post API Error:", error);

    })

    .finally(function() {

        console.log("===== TASK 3 COMPLETED =====");

    });


// Task 4 — API + Search

// Ask the user for category

let searchCategory = prompt("Enter product category:");

// Ask the user for maximum price

let maximumPrice = Number(
    prompt("Enter maximum price:")
);

fetch(apiUrl)

    .then(function(response) {

        return response.json();

    })

    .then(function(products) {


        // Filter using both conditions

        let matchingProducts = products.filter(function(product) {

            return (
                product.category === searchCategory &&
                product.price <= maximumPrice
            );

        });


        console.log("===== SEARCH RESULTS =====");

        if (matchingProducts.length > 0) {

            matchingProducts.forEach(function(product) {

                console.log("Product:", product.title);
                console.log("Price: $" + product.price);
                console.log("Category:", product.category);
                console.log("------------------------");

            });

        } else {

            console.log("No matching products found.");

        }

    })

    .catch(function(error) {

        console.log("Search Error:", error);

    })

    .finally(function() {

        console.log("===== TASK 4 COMPLETED =====");

    });

// Task 5 — API Shopping Cart

fetch(apiUrl)

    .then(function(response) {

        return response.json();

    })

    .then(function(products) {


        // 1. Display available products

        console.log("===== AVAILABLE PRODUCTS =====");

        products.forEach(function(product) {

            console.log(
                "ID:", product.id,
                "|", product.title,
                "| $" + product.price
            );

        });

        // Select products using their IDs

        // Example selected product IDs

        let selectedIds = [1, 2];


        // Add selected products to cart

        let cart = products.filter(function(product) {

            return selectedIds.includes(product.id);

        });

        // Display cart

        console.log("===== CART =====");

        cart.forEach(function(product, index) {

            console.log(
                "Product " +
                (index + 1) +
                ": " +
                product.title
            );

            console.log(
                "Price: $" + product.price
            );

        });


        // Calculate cart total

        let cartTotal = cart.reduce(function(total, product) {

            return total + product.price;

        }, 0);


        // Calculate discount

        let discountPercentage = 0;


        if (cartTotal > 200) {

            discountPercentage = 20;

        }

        else if (cartTotal > 100) {

            discountPercentage = 10;

        }


        // Calculate discount amount

        let discountAmount =
            cartTotal * discountPercentage / 100;


        // Final amount

        let finalAmount =
            cartTotal - discountAmount;


        console.log("Total: $" + cartTotal.toFixed(2));

        console.log(
            "Discount: " +
            discountPercentage +
            "%"
        );

        console.log(
            "Final Amount: $" +
            finalAmount.toFixed(2)
        );

    })

    .catch(function(error) {

        console.log("Cart Error:", error);

    })

    .finally(function() {

        console.log("===== TASK 5 COMPLETED =====");

    });


// Task 6 — FakeStore Product Report

fetch(apiUrl)

    .then(function(response) {

        return response.json();

    })

    .then(function(products) {


        console.log(`
========== PRODUCT REPORT ==========

Total Products: ${products.length}
`);


        // 1. Display all products using forEach()

        console.log("----- ALL PRODUCTS -----");

        products.forEach(function(product) {

            console.log(
                product.title +
                " - $" +
                product.price
            );

        });


        // 2. Create product names array using map()

        let productNames = products.map(function(product) {

            return product.title;

        });


        console.log("----- PRODUCT NAMES -----");

        productNames.forEach(function(name) {

            console.log("- " + name);

        });


        // 3. Products above $100 using filter()

        let expensiveProducts = products.filter(function(product) {

            return product.price > 100;

        });


        console.log("----- PRODUCTS ABOVE $100 -----");

        expensiveProducts.forEach(function(product) {

            console.log(
                product.title +
                " - $" +
                product.price
            );

        });

        // 4. Find electronics product using find()

        let electronics = products.find(function(product) {

            return product.category === "electronics";

        });


        console.log("----- ELECTRONICS PRODUCT -----");

        console.log(electronics);

        // 5. Calculate total price using reduce()

        let totalValue = products.reduce(function(total, product) {

            return total + product.price;

        }, 0);


        console.log(
            "Total Product Value: $" +
            totalValue.toFixed(2)
        );

        // 6. Check some()

        let anyAbove500 = products.some(function(product) {

            return product.price > 500;

        });


        console.log(
            "Any Product Above $500:",
            anyAbove500
        );

        // 7. Check every()

        let allAbove1 = products.every(function(product) {

            return product.price > 1;

        });


        console.log(
            "All Products Above $1:",
            allAbove1
        );

        // 8. Sort highest to lowest

        let sortedProducts = [...products].sort(function(a, b) {

            return b.price - a.price;

        });


        console.log("----- HIGHEST → LOWEST -----");

        sortedProducts.forEach(function(product) {

            console.log(
                product.title +
                " - $" +
                product.price
            );

        });

    })

    .catch(function(error) {

        console.log("Product Report Error:", error);

    })

    .finally(function() {

        console.log("========== PRODUCT REPORT COMPLETED ==========");

    });
