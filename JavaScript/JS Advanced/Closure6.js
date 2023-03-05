// function init() {
//     let name = "John";
    
//     function displayName() {
//         console.log(name)
//     }
//     displayName();
// }

// init();

/*------------------------------------*/

// if (Math.random() > 0.5) {
//     var x = 1;
// } else {
//     var x = 2;
// }

// console.log(x);

/*--------------------------------------*/

// if (Math.random() > 0.5) {
//     let x = 1;
// } else {
//     let x = 2;
// }

// console.log(x);

/*-----------------------------------------*/

// function makeFunc() {
//     const name = "John";
    
//     function displayName() {
//         console.log(name);
//     }

//     return displayName;
// }

// const myFunc = makeFunc();
// myFunc();

/*-----------------------------------------*/

// function makeAdder(x) {
//     return function(y) {
//         return x + y;
//     }
// }

// const add5 = makeAdder(5);
// const add10 = makeAdder(10);

// console.log(add5(2));
// console.log(add10(2));

/*--------------------------------------------*/

// const makeCounter = function() {
//     let privateCounter = 0;

//     function changeBy(val) {
//         privateCounter += val;
//     }

//     return {
//         increment() {
//             changeBy(1);
//         },
//         decrement() {
//             changeBy(-1);
//         },
//         value() {
//             return privateCounter;
//         }
//     }
// }

// const counter1 = makeCounter();
// const counter2 = makeCounter();

// console.log(counter1.value());
// console.log(counter2.value());

// counter1.increment();
// counter1.increment();

// console.log(counter1.value());
// console.log(counter2.value());

// counter1.decrement();

// console.log(counter1.value());
// console.log(counter2.value());

/*----------------------------------------*/

// gloval scope

// const e = 10;
// function sum(a) {
//     return function(b) {
//         return function(c) {
//             // outer functions scope
//             return function(d) {
//                 // local scope
//                 return a + b + c + d + e;
//             }
//         }
//     }
// }

// console.log(sum(1)(2)(3)(4));

/*-------------------------------------*/

// global scope

const e = 10;
function sum(a) {
    return function sum2(b) {
        return function sumb3(c) {
            // outer functions scope
            return function sum4(d) {
                return a + b + c + d + e;
            }
        }
    }
}

const sum2 = sum(1);
const sum3 = sum2(2);
const sum4 = sum3(3);
const result = sum4(4);
console.log(result);
