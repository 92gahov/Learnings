// function sayMyName(name) {
//     console.log(`My name is ${name}`)
// }
// sayMyName("Georgi");

//IMPLICIT BINDING

// const person = {
//     name: "Georgi",
//     sayMyName: function() {
//         console.log(`My name is ${this.name}`)
//     }
// };
// person.sayMyName();

//EXPLICIT BINDING

// const person = {
//     name: "Georgi",
// };

// function sayMyName() {
//     console.log(`My name is ${this.name}`)
// };

// sayMyName.call(person);

//NEW BINDING

// function Person(name) {
//     this.name = name;
// }

// const p1 = new Person("Georgi");
// console.log(`My name is ${p1.name}`);

//DEFAULT BINDING

function sayMyName() {
    console.log(`My name is ${this.name}`)
};

sayMyName();


