function sum(num1, num2){
    return num1 + num2;
}

function subtract(num1, num2){
    return num1 - num2;
}

function divide(num1, num2){
    if (num2 == 0){
        return 0;
    }
    return num1/num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

module.exports = {
    sum: sum,
    multiply: multiply,
    subtract: subtract,
    divide: divide
}; 

/*
console.log(`sum::${sum(20, 1)}`);
console.log(`subtract::${subtract(20, 1)}`);
console.log(`division::${divide(20, 2)}`);
console.log(`multiply::${multiply(20, 5)}`);
*/