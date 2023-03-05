// Function composition

// const double = x => x * 2;
// const square = x => x * x;

// let output1 = double(2);
// let output2 = square(output1);
// console.log(output2);

// let output_final = square(double(2));
// console.log(output_final);

/*-----------------------------------*/

// compose function

// const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);
// const double = x => x * 2;
// const square = x => x * x;

// let output_final = compose(square, double)(2);
// console.log(output_final);

/*----------------------------------------*/

// pipe function

const compose = (...fns) => x => fns.reduce((y, f) => f(y), x);
const double = x => x * 2;
const square = x => x * x;

let output_final = compose(square, double)(2);
console.log(output_final);



