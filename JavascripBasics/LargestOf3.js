// Import readline.
const readline = require("readline");

// Create readline interface.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask for the first number.
rl.question("Enter first number: ", function (input1) {

    // Convert first input to number.
    let num1 = Number(input1);

    // Ask for the second number.
    rl.question("Enter second number: ", function (input2) {

        // Convert second input to number.
        let num2 = Number(input2);

        // Ask for the third number.
        rl.question("Enter third number: ", function (input3) {

            // Convert third input to number.
            let num3 = Number(input3);

            // Check if num1 is the largest.
            if (num1 >= num2 && num1 >= num3) {

                // Display num1.
                console.log("Largest number =", num1);
            }

            // Check if num2 is the largest.
            else if (num2 >= num1 && num2 >= num3) {

                // Display num2.
                console.log("Largest number =", num2);
            }

            // Otherwise num3 is the largest.
            else {

                // Display num3.
                console.log("Largest number =", num3);
            }

            // Close readline.
            rl.close();
        });
    });
});