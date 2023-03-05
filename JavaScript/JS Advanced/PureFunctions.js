// 1) The same input ALWAYS gives the same output

const add = (x, y) => x + y;
console.log(add(2, 3));

const fullName = (first, last) => `${first} ${last}`;
console.log("Georgi", "Gahov");

// We can replace the function with the output
// This is called "referentioal transparency"

// 2) No side effects

const z = 5;
const sum = (x, y) => x + y + z;
console.log(sum(2, 2));

///////////////////////////////////////////////////

// Impure Example 1:
let x = 1;
const increment = () => x += 1;
console.log(increment());
console.log(x);

//////////////////////////////////////////////////

//Impure Example 2:
const myArray = [1, 2, 3];
const addToArray = (array, data) => {
    array.push(data);
    return array;
};
console.log(addToArray(myArray, 4));
console.log(myArray);

//////////////////////////////////////////////////

// Refactored Example 1:
const pureIncrement = (num) => num += 1;
console.log(pureIncrement(x))
console.log(x);

// Refactored Example 2:
const pureAddToArray = (array, data) => [...array, data];
console.log(pureAddToArray(myArray, 5));
console.log(myArray);

////////////////////////////////////////////////

// These common Higher Order Functions are Pure Functions

const oneToFive = [1, 2, 3, 4, 5];
const oddToFive = oneToFive.filter(elem => elem % 2 !== 0);
console.log(oddToFive);

const doubled = oneToFive.map(elem => elem * 2);
console.log(doubled);

const summed = oneToFive.reduce((acc, elem) => acc + elem);
console.log(summed);

console.log(oneToFive);