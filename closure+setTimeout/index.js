
// function x() {

//     var i = 1;
//     setTimeout(function() {
//         console.log(i);
//     }, 3000);

//     console.log("Hello! World");
// }

// x();

// function x() {
//     var i = 1;
//     for (var i = 1; i <= 5; i++){
//         setTimeout(function() {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Hello! World");
// }

// x();

// function x() {
//     var i = 1;
//     for (let i = 1; i <= 5; i++){
//         setTimeout(function() {
//             console.log(i);
//         }, i * 1000);
//     }
//     console.log("Hello! World");
// }

// x();


function x() {
    var i = 1;
    for (var i = 1; i <= 5; i++){

        function close(x) {
            setTimeout(function() {
                console.log(x);
            }, x * 1000);


        }
        close(i);
    }
    console.log("Hello! World");
}

x();
