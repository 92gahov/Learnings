// Official Definition of Recursion:
// In computer science, recursion is a method of solving a problem where the solution depend on solutions to smaller instances of the same problem.

// Unofficial Definition of Recursion:
// Any situation where you do something, and depending on the results, you might do it again.

// In programming, recursion occurs when a function calls itself.

// Any iterator function (aka function with a loop) can be recursive instead.

const countToTen = (num = 1) => {
    while (num <= 10) {
        console.log(num);
        num++;
    }
};

// countToTen();

// recursion function have 2 parts:
// 1) the recursive call to the function
// 2) at least one condition to exit

// const recurToTen = (num = 1) => {
//     if (num > 10) return;
//     console.log(num);
//     num++;
//     recurToTen(num);
// };

// recurToTen();

// Reasons to use (not abuse) Recursion
// 1) Less Code
// 2) Elegant Code (aka Pleasing to Look at)
// 3) Increased Readability

// Reasons to NOT use Recursion
// 1) Performance
// 2) Possibly more difficult to debug (aka follow the logic)
// 3) Is the Readability Improved?

// The Standard Example: The Fibonacci Sequence
//0, 1, 1, 2, 3, 5, 8, 13, 21, etc.

// Without Recursion:
const fibonacci = (num, array = [0, 1]) => {
    while (num > 2) {
        const [nextToLast, last] = array.slice(-2);
        array.push(nextToLast + last);
        num -= 1;
    }
    return array;
};

console.log(fibonacci(12));

// With Recursion:
const fib = (num, array = [0, 1]) => {
    if (num <= 2) return array;
    const [nextToLast, last] = array.slice(-2);
    return fib(num - 1, [...array, nextToLast + last]);
};

console.log(fib(12));

// Without Recursion:
const fibonacciPos = (pos) => {
    if (pos <= 1) return pos;
    const seq = [0, 1];
    for (let i = 2; i <= pos; i++) {
        const [nextToLast, last] = seq.slice(-2);
        seq.push(nextToLast + last);
    }
    return seq[pos];
};

console.log(fibonacciPos(8));

// With Recursion:
// const fibPos = (pos) => {
//     if (pos < 2) return pos;
//     return fibPos(pos - 1) + fibPos(pos - 2);
// };

const fibPos = pos => pos < 2 ? pos : fibPos(pos - 1) + fibPos(pos - 2);

console.log(fibPos(8));

// Real-Life Example:

// 1) Continuation Token from an API

// const getAWSProductIdImages = async () => {

//     // get the data with await fetch request

//     if (data.IsTruncated) {
//         // recursive
//         return await getAWSProductIdImages(
//             productId,
//             s3, // connection to s3
//             resultArray, // accumulator
//             data.NextContinuationToken
//         );
//     }
//     return resultArray;
// };

// 2) A Parser:
//a company directory
// a file directory
// the DOM - a web crawler
// An XML or JSON data export

const artistByGenre = {
    jazz: ["Miles Davis", "John Coltrane"],
    rock: {
        classic: ["Bob Seger", "The Eagles"],
        hair: ["Def Leppard", "Whitesnake", "Poison"],
        alt: {
            clasic: ["Pearl Jam", "The Killers"],
            current: ["Joywave", "Sir Sly"]
        }
    },
    unclassfield: {
        new: ["Caamp", "Neil Young"],
        classic: ["Seal", "Morcheeba", "Chris Stapleton"]
    }
}

const getArtistNames = (dataObj, arr = []) => {
    Object.keys(dataObj).forEach(key => {
        if (Array.isArray(dataObj[key])) {
            return dataObj[key].forEach(artist => {
                arr.push(artist);
            });
        }
        getArtistNames(dataObj[key], arr);
    });
    return arr;
}

console.log(getArtistNames(artistByGenre));