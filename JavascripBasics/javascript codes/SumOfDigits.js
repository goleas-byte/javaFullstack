// Import readline.
const readline = require("readline");

// Create readline interface.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for a number.
rl.question("Enter a number: ", function (input) {

    // Convert the input to a number.
    let number = Number(input);

    // Store the sum of digits.
    let sum = 0;

    // Continue while there are digits remaining.
    while (number > 0) {

        // Get the last digit.
        // Example: 123 % 10 = 3
        let digit = number % 10;

        // Add the digit to sum.
        sum = sum + digit;

        // Remove the last digit.
        // Example: 123 becomes 12.
        number = Math.floor(number / 10);
    }

    // Display the final sum.
    console.log("Sum of digits =", sum);

    // Close readline.
    rl.close();
});// Import readline.
const readline = require("readline");

// Create readline interface.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for a number.
rl.question("Enter a number: ", function (input) {

    // Convert the input to a number.
    let number = Number(input);

    // Store the sum of digits.
    let sum = 0;

    // Continue while there are digits remaining.
    while (number > 0) {

        // Get the last digit.
        // Example: 123 % 10 = 3
        let digit = number % 10;

        // Add the digit to sum.
        sum = sum + digit;

        // Remove the last digit.
        // Example: 123 becomes 12.
        number = Math.floor(number / 10);
    }

    // Display the final sum.
    console.log("Sum of digits =", sum);

    // Close readline.
    rl.close();
});