// let name = "John";

// function greeting() {
//     let message = "Hi";
//     console.log(message + " " + name);
// }

// console.log(name);
// console.log(message);

/*----------------------------------------------*/

// function greeting() {
//     let message = "Hi";

//     function sayHi() {
//         console.log(message)
//     }
//     sayHi();
// }

// greeting();

/*------------------------------------------------*/

// function greeting() {
//     let message = "Hi";

//     function sayHi() {
//         console.log(message)
//     }

//     return sayHi;
// }

// let hi = greeting();
// hi();

/*----------------------------------------------*/

// function greeting(message) {
//     return function(name) {
//         return message + " " + name;
//     }
// }

// let sayHi = greeting("Hi");
// let sayHello = greeting("Hello");

// console.log(sayHi("John"));
// console.log(sayHello("John"));

/*---------------------------------------------------*/

// for (var i = 1; i <= 3; i++) {
//     setTimeout(() => {
//         console.log("after " + i + " second(s):" + i)
//     }, i * 1000)
// };

// IIFE
// for (var i = 1;i <= 3;i++) {
//     (function(i) {
//         setTimeout(() => {
//             console.log("after " + i + " second(s):" + i)
//         }, i * 1000)
//     })(i);
// }

// let
for (let i = 1; i <= 3; i++) {
    setTimeout(() => {
        console.log("after " + i + " second(s):" + i)
    }, i * 1000)
}