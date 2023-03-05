// function numberGenerator() {
//     let num = 1;

//     function checkNumber() {
//         console.log(num);
//     }

//     num++;
//     return checkNumber;
// }

// let number = numberGenerator();
// number();

/*--------------------------------------------*/

// function sayHello() {
//     let say = function () { console.log(hello) }
//     let hello = "Hello World";
//     return say;
// }

// let sayHelloClosure = sayHello();
// sayHelloClosure();

/*-----------------------------------------------*/

// let x = 10;

// function foo() {
//     let y = 20;

//     function bar() {
//         let z = 15;
//         return x + y + z;
//     }

//     return bar;
// }

// let test = foo();

// console.log(test());

/*---------------------------------------------*/

// let result = [];

// for (var i = 0;i < 5;i++) {
//     result[i] = function() {
//         console.log(i)
//     }
// }

// result[0]();
// result[1]();
// result[2]();
// result[3]();
// result[4]();

/*------------------------------------------*/

// let result = [];

// for (var i = 0;i < 5;i++) {
//     result[i] = (function inner(x) {
//         return function() {
//             console.log(x);
//         }
//     })(i);
// }

// result[0]();
// result[1]();
// result[2]();
// result[3]();
// result[4]();

/*-----------------------------------------------*/

// let result = [];

// for (let i = 0;i < 5;i++) {
//     result[i] = function() {
//         console.log(i);
//     }
// }

// result[0]();
// result[1]();
// result[2]();
// result[3]();
// result[4]();

/*-------------------------------------*/

// function iCanThinkOfAName(num, obj) {
//     let array = [1, 2, 3];
//     function doSomething(i) {
//         num += i;
//         array.push(num);
//         console.log("num: " + num);
//         console.log("array: " + array);
//         console.log("obj.value: " + obj.value);
//     }

//     return doSomething;
// }

// let referenceObj = { value: 10 };
// let foo = iCanThinkOfAName(2, referenceObj);
// let bar = iCanThinkOfAName(6, referenceObj);

// foo(2);
// bar(2);

// referenceObj.value++;

// foo(4);
// bar(4);

/*-----------------------------------------*/

// function mysteriosCalculator(a, b) {
//     let mysteriosVariable = 3;
//     return {
//         add: () => {
//             let result = a + b + mysteriosVariable;
//             return toFixedTwoPlaces(result);
//         },
//         subtract: () => {
//             let result = a - b - mysteriosVariable;
//             return toFixedTwoPlaces(result);
//         }
//     }
// }

// function toFixedTwoPlaces(value) {
//     return value.toFixed(2);
// }

// let myCalculator = mysteriosCalculator(10.01, 2.01);
// console.log(myCalculator.add());
// console.log(myCalculator.subtract());

/*---------------------------------------------*/

function secretPassword() {
    let password = "xh38sk";
    return {
        guessPassword: (guess) => {
            if (guess === password) {
                return true
            } else {
                return false
            }
        }
    }
}

let passwordGame = secretPassword();
console.log(passwordGame.guessPassword("hdhdhdhgd"));
console.log(passwordGame.guessPassword("xh38sk"));