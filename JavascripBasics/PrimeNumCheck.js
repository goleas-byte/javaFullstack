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

    // Assume the number is prime.
    let isPrime = true;

    // Numbers less than 2 are not prime.
    if (number < 2) {

        // Mark the number as not prime.
        isPrime = false;
    }

    // Check possible factors.
    for (let i = 2; i <= Math.sqrt(number); i++) {

        // Check if number is divisible by i.
        if (number % i === 0) {

            // The number has another factor.
            isPrime = false;

            // Stop checking.
            break;
        }
    }

    // Check whether the number is prime.
    if (isPrime) {

        // Display prime.
        console.log(number, "is Prime");
    }
    else {

        // Display not prime.
        console.log(number, "is Not Prime");
    }

    // Close readline.
    rl.close();
});