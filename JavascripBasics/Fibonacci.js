// Import readline.
const readline = require("readline");

// Create readline interface.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask how many Fibonacci terms are required.
rl.question("Enter N: ", function (input) {

    // Convert input to a number.
    let n = Number(input);

    // First Fibonacci number.
    let first = 0;

    // Second Fibonacci number.
    let second = 1;

    // Store the final output.
    let result = "";

    // Repeat N times.
    for (let i = 1; i <= n; i++) {

        // Add the current number to the result.
        result = result + first + " ";

        // Calculate the next Fibonacci number.
        let next = first + second;

        // Move second number into first.
        first = second;

        // Move next number into second.
        second = next;
    }

    // Display the Fibonacci series.
    console.log("Fibonacci Series:");
    console.log(result);

    // Close readline.
    rl.close();
});