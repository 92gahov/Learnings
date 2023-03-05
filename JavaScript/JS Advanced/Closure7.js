// Simple Closure

// function greet() {
//     const name = "John";

//     return function () {
//         console.log(`Hi ${name}`)
//     }
// }

// const greeting = greet();

// greeting();

/*----------------------------------------*/

// Count Function

// function setCount() {
//     let number = 0;

//     return function() {
//         console.log(++number)
//     }
// }

// const counter = setCount();
// counter();
// counter();
// counter();

/*-----------------------------------*/

// For Loop Interview Question

// function addNumbers() {
//     var numbers = [];

//     for (var i = 1; i <= 3; i++) {
//         numbers.push(function () {
//             return i;
//         })
//     }

//     return numbers;
// }

// const getNumbers = addNumbers();
// console.log(getNumbers[0]());
// console.log(getNumbers[1]());
// console.log(getNumbers[2]());

/*---------------------------------------*/

// For Loop with Let

// function addNumbers() {
//     var numbers = [];

//     for (let i = 1;i <= 3;i++) {
//         numbers.push(function() {
//             return i;
//         })
//     }

//     return numbers;
// }

// const getNumbers = addNumbers();

// console.log(getNumbers[0]());
// console.log(getNumbers[1]());
// console.log(getNumbers[2]());

/*---------------------------------------*/

// For Loop with IIFE (Immediately Invoked Function Expression)

// const addNumbers = () => {
//     var numbers = [];

//     for (var i = 1;i <= 3;i++) {
//         ((i) => {
//             numbers.push(() => {
//                 return i;
//             })
//         })(i)
//     }

//     return numbers;
// }

// const getNumbers = addNumbers();
// console.log(getNumbers[0]());
// console.log(getNumbers[1]());
// console.log(getNumbers[2]());

/*---------------------------------------------*/

// Interview Question - setTimeout

// const createCallbacks = () => {
//     for (var i = 1;i <= 3;i++) {
//         setTimeout(() => {
//             console.log(i);
//         }, i * 1000)
//     }
// }

// createCallbacks();

/*--------------------------------------*/

// Encapsulation

// const countFunc = () => {
//     let count = 0;

//     return {
//         increment: () => ++count,
//         decrement: () => --count,
//         getCount: () => console.log(count)
//     }
// }

// const counter = countFunc();

// counter.increment();
// counter.increment();
// counter.increment();
// counter.decrement();

// counter.getCount();

/*-----------------------------------------------*/

// Using a Closure in an init function to ensure that the function is only executed once

// const init = () => {
//     let initialized = false;

//     return () => {
//         if (initialized) {
//             return console.warn("⚠️ init function already called, not initializing");
//         }

//         initialized = true;
//         return console.info("initialized 🚀")
//     }
// }

// const initialize = init();

// initialize();
// initialize();
// initialize();

/*------------------------------------------------*/

// Inefficient Memory Usage

// const findByIndex = (index) => {
//     console.time("array creation");
//     const numbers = Array.from(Array(1000000).keys());
//     console.timeEnd("array creation");

//     const result = numbers[index];

//     console.log(`item by index ${index}=${result}`);

//     return result;
// }

// findByIndex(110351);
// findByIndex(911234);
// findByIndex(520109);
// findByIndex(398);

/*-------------------------------------------*/

// Efficient Memory Usage

const findByIndex = () => {
    console.time("array creation");
    const numbers = Array.from(Array(1000000).keys());
    console.timeEnd("array creation");

    return (index) => {
        const result = numbers[index];

        console.log(`item by index ${index}=${result}`);

        return result;
    }
}

const find = findByIndex();

find(110351);
find(911234);
find(520109);
find(398);


