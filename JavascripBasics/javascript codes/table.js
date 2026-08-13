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

    // Loop from 1 to 10.
    for (let i = 1; i <= 10; i++) {

        // Calculate the multiplication.
        let result = number * i;

        // Display the multiplication.
        console.log(number + " x " + i + " = " + result);
    }

    // Close readline.
    rl.close();
});