// var x = 1;
// var x = 2;
// console.log(x);

// let y = 1;
// y = 2;
// console.log(y);

// const z = 1;
// z = 2;
// console.log(z);

//////////////////////////////////////////////////

// GLOBAL SCOPE
// var x = 1;
// let y = 2;
// const z = 3;
// console.log(x, y, z);

// LOCAL SCOPE
// {
//     let y = 4;
//     console.log(y);
// }

// LOCAL SCOPE
// function myFunc() {
//     const z = 5;
//     console.log(z);

//     let y = 4;
//     console.log(y);
// }

// // console.log(y);
// myFunc();

////////////////////////////////////////////////////

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(`global ${x}`);
// console.log(`global ${y}`);
// console.log(`global ${z}`);

// function myFunc() {
//     var x = 10;
//     const z = 5;
//     console.log(`function ${x}`);
//     console.log(`function ${y}`);
//     console.log(`function ${z}`);

//     {
//         var x = 11;
//         const z = 6;
//         console.log(`block ${x}`);
//         console.log(`block ${y}`);
//         console.log(`block ${z}`);
//     }
// };

// myFunc();

/////////////////////////////////////////////////////

var x = 1;
let y = 2;
const z = 3;

console.log(`global ${x}`);
console.log(`global ${y}`);
console.log(`global ${z}`);

function myFunc() {
    var x = 10;
    const z = 5;

    {
        var x = 11;
        const z = 6;
        console.log(`block ${x}`);
        console.log(`block ${y}`);
        console.log(`block ${z}`);
    }
    console.log(`function ${x}`);
    console.log(`function ${y}`);
    console.log(`function ${z}`);
};

myFunc();


