const alphabet = ["A", "B", "C", "D", "E", "F"];
const numbers = ["1", "2", "3", "4", "5", "6"];

// const [a, b] = alphabet;
// const [a,,c] = alphabet;
const [a, , c, ...rest] = alphabet;

const newArray = [...alphabet, ...numbers];

console.log(a);
// console.log(b);
console.log(c);
console.log(rest);
console.log(newArray);

function sumAndMultiply(a, b) {
    return [a + b, a * b, a / b];
};

const array = sumAndMultiply(2, 3);
const [sum, miltiply, division = "No division"] = sumAndMultiply(2, 3);

console.log(array);
console.log(sum);
console.log(miltiply);
console.log(division);

/*---------------------------------------------------------------------------*/

const personOne = {
    name: "John",
    age: 24,
    address: {
        city: "Somewhere",
        state: "One of them"
    }
};

const personTwo = {
    name: "Doe",
    age: 32,
    favoriteFood: "Watermelon",
    address: {
        city: "Somewhere else",
        state: "Another one of them"
    }
};

// const {name, age} = personTwo;
// const { name: firstName, age, favoriteFood = "Rice" } = personTwo;
// const {name, ...restObj} = personTwo
const {name, address: {city, state}} = personTwo;

console.log(name);
// console.log(firstName);
// console.log(age);
// console.log(favoriteFood);
// console.log(restObj);
console.log(city);
console.log(state);

// function printUser(user) {
//     console.log(user);
// };

function printUser({name, age}) {
    console.log(`Name is ${name}. Age is ${age}`);
};

printUser(personOne);