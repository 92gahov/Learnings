// Give a positive integer "n", determine if the number is a power of 2 or not.

// function isPowerOfTwo(n) {
//     if (n < 1) {
//         return false;
//     }
//     while (n > 1) {
//         if (n % 2 !== 0) {
//             return false;
//         }
//         n = n / 2;
//     }
//     return true;
// }

// console.log(isPowerOfTwo(1));
// console.log(isPowerOfTwo(2));
// console.log(isPowerOfTwo(5));
// console.log(isPowerOfTwo(8));
// console.log(isPowerOfTwo(9));

function isPowerOfTwoBitWise(n) {
    if (n < 1) {
        return false;
    }
    return (n & (n - 1)) === 0;
}

console.log(isPowerOfTwoBitWise(1));
console.log(isPowerOfTwoBitWise(2));
console.log(isPowerOfTwoBitWise(5));
console.log(isPowerOfTwoBitWise(8));
console.log(isPowerOfTwoBitWise(9));