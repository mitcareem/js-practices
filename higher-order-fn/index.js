const add = (a, b) => {
    return a + b;
}

const mul = (a, b) => {
    return a * b;
}

const div = (a, b) => {
    return a / b;
}

const sub = (a, b) => {
    return a - b;
}


// console.log(add(2,3));

// console.log(mul(2,3));


// higher order fn

const calculate = (a, b, operator) => {
    return operator (a, b, operator);
}

console.log(calculate(2, 3, add));
console.log(calculate(2, 3, mul));

console.log(calculate(2, 3, sub));
console.log(calculate(2, 3, div));