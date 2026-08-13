// Import readline.
const readline = require("readline");

// Create readline interface.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user to enter something.
rl.question("Enter a number or string: ", function (input) {

    // Convert the input to lowercase.
    // This allows "Madam" and "madam" to be treated the same.
    let text = input.toLowerCase();

    // Reverse the string.
    // split("") converts it into an array.
    // reverse() reverses the array.
    // join("") converts it back into a string.
    let reversed = text.split("").reverse().join("");

    // Compare original and reversed strings.
    if (text === reversed) {

        // They are the same, so it is a palindrome.
        console.log("Palindrome");
    }
    else {

        // They are different.
        console.log("Not a Palindrome");
    }

    // Close readline.
    rl.close();
});