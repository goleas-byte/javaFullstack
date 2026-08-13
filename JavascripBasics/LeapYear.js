// Import readline.
const readline = require("readline");

// Create readline interface.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for a year.
rl.question("Enter a year: ", function (input) {

    // Convert input to a number.
    let year = Number(input);

    // A year is a leap year if:
    // 1. It is divisible by 400
    // OR
    // 2. It is divisible by 4 but not divisible by 100.
    if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {

        // Display leap year.
        console.log(year, "is a Leap Year");
    }
    else {

        // Display not a leap year.
        console.log(year, "is not a Leap Year");
    }

    // Close readline.
    rl.close();
});