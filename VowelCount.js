// Import readline.
const readline = require("readline");

// Create readline interface.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Ask the user to enter a string.
rl.question("Enter a string: ", function (input) {

    // Convert the string to lowercase.
    // This allows us to check only lowercase vowels.
    let text = input.toLowerCase();

    // Create a variable to count vowels.
    let count = 0;

    // Loop through every character.
    for (let i = 0; i < text.length; i++) {

        // Get the current character.
        let character = text[i];

        // Check whether the character is a vowel.
        if (
            character === "a" ||
            character === "e" ||
            character === "i" ||
            character === "o" ||
            character === "u"
        ) {

            // Increase the vowel count.
            count++;
        }
    }

    // Display the number of vowels.
    console.log("Number of vowels =", count);

    // Close readline.
    rl.close();
});