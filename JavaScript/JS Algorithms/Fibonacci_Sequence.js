// Given a number "n", find the first "n" elements of the Fibonacci sequence.
// The first two numbers in the sequence are 0 and 1.
// fibonacci(2) = [0,1]
// fibonacci(3) = [0,1,1]
// fibonacci(7) = [0,1,1,2,3,5,8]

function fibonacci(n) {
    const fib = [0, 1];
    for (let i = 2;i < n;i++) {
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib;
}

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));
console.log(fibonacci(8));