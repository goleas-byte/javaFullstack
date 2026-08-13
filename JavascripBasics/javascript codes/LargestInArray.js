// Import readline.
const readline = require("readline");

// Create readline interface.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user to enter numbers separated by spaces.
rl.question("Enter numbers separated by spaces: ", function (input) {

    // split(" ") separates the input wherever there is a space.
    // map(Number) converts every value from string to number.
    let numbers = input.split(" ").map(Number);

    // Assume the first element is the largest.
    let largest = numbers[0];

    // Start checking from the second element.
    for (let i = 1; i < numbers.length; i++) {

        // Check if the current number is larger.
        if (numbers[i] > largest) {

            // Update largest.
            largest = numbers[i];
        }
    }

    // Display the array.
    console.log("Array:", numbers);

    // Display the largest element.
    console.log("Largest element =", largest);

    // Close readline.
    rl.close();
});