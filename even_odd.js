// Import the readline module.
const readline = require("readline");

// Create the readline interface.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for a number.
rl.question("Enter a number: ", function (input) {

    // Convert the input to a number.
    let number = Number(input);

    // Check if the remainder after dividing by 2 is zero.
    if (number % 2 === 0) {

        // The number is even.
        console.log(number, "is Even");
    }
    else {

        // The number is odd.
        console.log(number, "is Odd");
    }

    // Close the readline interface.
    rl.close();
});