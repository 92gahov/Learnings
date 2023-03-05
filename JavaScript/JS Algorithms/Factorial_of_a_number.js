// Give an integer "n", find the factorial of that integer.
// Factorial of zero is 1.
// factorial(4) = 4*3*2*1 = 24
// factorial(5) = 5*4*3*2*1 = 120

function factorial(n) {
    let result = 1;
    for (let i = 2;i <= n;i++) {
        result = result * i;
    }
    return result
}

console.log(factorial(2));
console.log(factorial(5));
console.log(factorial(6));