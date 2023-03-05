// function OuterFunction() {
//     let outerVariable = 100;

//     function InnerFunction() {
//         console.log(outerVariable)
//     }

//     return InnerFunction
// }

// let innerFunc = OuterFunction();
// innerFunc();

/*------------------------------------------*/

// function Counter() {
//     let counter = 0;

//     function IncreaseCounter() {
//         return counter += 1;
//     }

//     return IncreaseCounter;
// }

// let counter = Counter();
// console.log(counter());
// console.log(counter());
// console.log(counter());

/*-------------------------------------------------*/

// function Counter() {
//     let counter = 0;

//     setTimeout(() => {
//         let innerCounter = 0;
//         counter += 1;
//         console.log("counter = " + counter);

//         setTimeout(() => {
//             counter += 1;
//             innerCounter += 1;
//             console.log("counter = " + counter + ", innerCounter = " + innerCounter);
//         }, 500)
//     }, 1000)
// };

// Counter();

/*---------------------------------------------------*/

let counter = (function () {
    let privateCounter = 0;
    function changeBy(val) {
        privateCounter += val;
    }
    return {
        increment: function () {
            changeBy(1);
        },
        decrement: function () {
            changeBy(-1);
        },
        value: function () {
            return privateCounter;
        }
    }
})();

console.log(counter.value());
counter.increment();
counter.increment();
console.log(counter.value());
counter.decrement();
console.log(counter.value());