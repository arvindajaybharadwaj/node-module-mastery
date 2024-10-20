// Main App

import * as input from "./input";
import * as calculate from "./calculate";

async function app() {
    const operation = await input.getUserInput("Enter the operation you want to perform: (add, subtract, multiply, divide)\n");
    const num1 = parseFloat(await input.getUserInput("Enter the first number: \n"));
    const num2 = parseFloat(await input.getUserInput("Enter the second number: \n"));

    let result;

    switch(operation) {
        case "add": {
            result = calculate.add(num1, num2);
            break;
        }
        case "subtract": {
            result = calculate.subtract(num1, num2);
            break;
        }
        case "multiply": {
            result = calculate.multiply(num1, num2);
            break;
        }
        case "divide": {
            result = calculate.divide(num1, num2);
            break;
        }
        default: {
            console.log("Error! Please enter a valid operation");
        }
    }
    console.log(`The result is: ${result}`);
}

app();
