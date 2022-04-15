// const radius = [1, 2, 3, 4];

// const calculateArea = (radius) => {
//     const output = [];

//     for (let i = 0; i < radius.length; i++){
//         output.push(Math.PI * radius[i] * radius[i]);
//     }
//     return output;
// }

// // console.log(calculateArea(radius));


// const calculateCircum = (radius) => {
//     const output = [];

//     for (let i = 0; i < radius.length; i++){
//         output.push(2 * Math.PI * radius[i]);
//     }
//     return output;
// }

// // console.log(calculateArea(radius));
// // console.log(calculateCircum(radius));


// const calculateDiameter = (radius) => {
//     const output = [];

//     for (let i = 0; i < radius.length; i++){
//         output.push(2 * radius[i]);
//     }
//     return output;
// }

// console.log(calculateDiameter(radius));
// console.log(calculateArea(radius));
// console.log(calculateCircum(radius));


// instead of writing repeating code, just write 
// just write higher order function like this;

const radius = [1, 2, 3, 4];

const area = (radius) => {
    return Math.PI * radius * radius;
};

const circum = (radius) => {
    return 2 * Math.PI * radius;
};

const diameter = (radius) => {
    return 2 * radius;
};

const calculate = (radius, logic) => {
    const output = [];
    for(let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
    
};

console.log(calculate(radius, area));
console.log(calculate(radius, diameter));
console.log(calculate(radius, circum));






