// Import Node.js's built-in readline module.
// readline allows us to take input from the terminal.
const readline = require("readline");

// Create a readline interface.
// input: receives input from the keyboard.
// output: displays messages in the terminal.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for the first number.
rl.question("Enter the first number: ", function (input1) {

    // Convert the user's input from a string to a number.
    let num1 = Number(input1);

    // Ask the user for the second number.
    rl.question("Enter the second number: ", function (input2) {

        // Convert the second input from a string to a number.
        let num2 = Number(input2);

        // Ask the user which operator they want to use.
        rl.question("Enter operator (+, -, *, /): ", function (operator) {

            // Create a variable to store our answer.
            let result;

            // Check if the operator is +.
            if (operator === "+") {

                // Add the two numbers.
                result = num1 + num2;
            }

            // Check if the operator is -.
            else if (operator === "-") {

                // Subtract the second number from the first.
                result = num1 - num2;
            }

            // Check if the operator is *.
            else if (operator === "*") {

                // Multiply the two numbers.
                result = num1 * num2;
            }

            // Check if the operator is /.
            else if (operator === "/") {

                // Check that we are not dividing by zero.
                if (num2 === 0) {

                    // Display an error if the second number is zero.
                    console.log("Cannot divide by zero.");

                    // Close the readline interface.
                    rl.close();

                    // Stop the program.
                    return;
                }

                // Divide the first number by the second number.
                result = num1 / num2;
            }

            // If the user entered something other than +, -, *, /.
            else {

                // Display an error message.
                console.log("Invalid operator.");

                // Close the readline interface.
                rl.close();

                // Stop the program.
                return;
            }

            // Display the final answer.
            console.log("Result =", result);

            // Close the readline interface.
            rl.close();
        });
    });
});