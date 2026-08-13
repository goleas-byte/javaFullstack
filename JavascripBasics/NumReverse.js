// Import readline.
const readline = require("readline");

// Create readline interface.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for a number.
rl.question("Enter a number: ", function (input) {

    // Convert input to a number.
    let number = Number(input);

    // Variable to store the reversed number.
    let reverse = 0;

    // Continue until all digits are processed.
    while (number > 0) {

        // Get the last digit.
        let digit = number % 10;

        // Add the digit to the reversed number.
        reverse = reverse * 10 + digit;

        // Remove the last digit from the original number.
        number = Math.floor(number / 10);
    }

    // Display the reversed number.
    console.log("Reverse =", reverse);

    // Close readline.
    rl.close();
});