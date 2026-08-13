// Import Node.js readline module.
// readline allows us to take input from the terminal.
const readline = require("readline");

// Create a readline interface.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for the principal amount.
rl.question("Enter Principal amount: ", function (inputP) {

    // Convert the input from string to number.
    let P = Number(inputP);

    // Ask the user for the rate.
    rl.question("Enter Rate of interest: ", function (inputR) {

        // Convert the input to a number.
        let R = Number(inputR);

        // Ask the user for the time.
        rl.question("Enter Time: ", function (inputT) {

            // Convert the input to a number.
            let T = Number(inputT);

            // Calculate Simple Interest.
            // Formula: SI = (P × R × T) / 100
            let SI = (P * R * T) / 100;

            // Display the result.
            console.log("Simple Interest =", SI);

            // Close the readline interface.
            rl.close();
        });
    });
});