

const x = () => {
    var a = 7;
    const y = () => {
        console.log(a);
    }
    return y;  // it will return closure  along with value of a == 7, 
    // it will not return only code......
}

var z = x();
console.log(z);

z();


// function along with its lexical scope forms a closure
// function y is binds to function x and it forms a closure
// function y is the inner function is the closure


// both  function are same

// const x = () => {
//     var a = 7;
//     return const y = () => {
//         console.log(a);
//     }
//  }

// var z = x();
// console.log(z);

// z();
