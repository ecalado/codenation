const calculator = require("./calc");
const prompt = require('prompt-sync')();

function options() {
    console.log(`
    1 - Sum
    2 - Subtract
    3 - Multiply
    4 - Divide
    0 - Exit
    `);
}

function optionSelected(option) {
    const num1 = Number(prompt("Type number one: "));
    const num2 = Number(prompt("Type number two: "));

    let result;
    switch (option) {
        case "1": result = calculator.sum(num1, num2);
            break;
        case "2": result = calculator.subtract(num1, num2);
            break;
        case "3": result = calculator.multiply(num1, num2);
            break;
        case "4": result = calculator.divide(num1, num2);
            break;
        default: result = null;
    }

    return result;
}

let option;
while (option != '0') {
    options();

    option = prompt("What is your option? ")

    if (option != 0) {
        const result = optionSelected(option);

        console.log(`The result is ${result}`);
    }
}


