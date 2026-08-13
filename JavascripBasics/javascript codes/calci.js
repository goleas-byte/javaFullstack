
const readline = require("readline");


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


rl.question("Enter the first number: ", function (input1) {

    let num1 = Number(input1);

    
    rl.question("Enter the second number: ", function (input2) {

        
        let num2 = Number(input2);

        
        rl.question("Enter operator (+, -, *, /): ", function (operator) {

           
            let result;

            
            if (operator === "+") {

               
                result = num1 + num2;
            }

            
            else if (operator === "-") {
  result = num1 - num2;
            }

            else if (operator === "*") {

                result = num1 * num2;
            }

        
            else if (operator === "/") {

                if (num2 === 0) {

                
                    console.log("Cannot divide by zero.");

                    rl.close();

                 
                    return;
                }

             
                result = num1 / num2;
            }

            else {

                console.log("Invalid operator.");

               
                rl.close();
 // Stop the program.
                return;
            }

           
            console.log("Result =", result);

           
            rl.close();
        });
    });
});