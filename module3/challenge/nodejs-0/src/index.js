'use strict'

const fibonacci = () => {
    
    let idx = 2;
    let value = 0; 
    let result = [0, 1];

    while (value <= 350){
        value = result[idx - 2] + result[idx - 1];
        result[idx] = value;
        idx++;        
    }

    return result;
}

const isFibonnaci = (num) => {
    return fibonacci().includes(num);
}

module.exports = {
    fibonacci,
    isFibonnaci
}