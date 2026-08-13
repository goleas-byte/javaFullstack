// Import readline.
const readline = require("readline");

// Create readline interface.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user for marks.
rl.question("Enter your marks: ", function (input) {

    // Convert the input into a number.
    let marks = Number(input);

    // Check if marks are 90 or above.
    if (marks >= 90) {

        // Grade A.
        console.log("Grade: A");
    }

    // Check if marks are 75 or above.
    else if (marks >= 75) {

        // Grade B.
        console.log("Grade: B");
    }

    // Check if marks are 60 or above.
    else if (marks >= 60) {

        // Grade C.
        console.log("Grade: C");
    }

    // Check if marks are 40 or above.
    else if (marks >= 40) {

        // Grade D.
        console.log("Grade: D");
    }

    // If marks are below 40.
    else {

        // Student has failed.
        console.log("Grade: Fail");
    }

    // Close readline.
    rl.close();
});