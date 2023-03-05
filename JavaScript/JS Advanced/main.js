// let a = 10;

// function outer() {
//     let b = 20;
//     function inner() {
//         let c = 30
//         console.log(a, b, c);
//     }
//     inner();
// };

// outer();

// ------------------------------------------------------------

// function outer() {
//     let counter = 0;
//     function inner() {
//         counter++;
//         console.log(counter);
//     }
//     return inner;
// };
// const fn = outer();
// fn();
// fn();

//-----------------------------------------------------------

// function sum(a, b, c) {
//     return a + b + c;
// };
// console.log(sum(2, 3, 5));

// function curry(fn) {
//     return function (a) {
//         return function (b) {
//             return function (c) {
//                 return fn(a, b, c);
//             }
//         }
//     }
// };

// const curriSum = curry(sum);
// console.log(curriSum(2)(3)(5));

//------------------------------------------------------------

// const person = {
//     name: 'John',
//     sayMyName: function () {
//         console.log(this.name);
//     }
// };
// // person.sayMyName();

// function sayMyName() {
//     console.log(this.name);
// };
// // sayMyName.call(person);

// function Person(name) {
//     this.name = name;
// };
// const p1 = new Person('John');
// const p2 = new Person('Doe');
// // console.log(p1.name, p2.name);

// sayMyName();

//--------------------------------------------------------------

// function Person(fname, lname) {
//     this.firstName = fname;
//     this.lastName = lname;
// };

// const p1 = new Person('John', 'Doe');
// const p2 = new Person('Jane', 'Doe');

// Person.prototype.getFullName = function() {
//     return this.firstName + ' ' + this.lastName;
// };
// console.log(p1.getFullName());
// console.log(p2.getFullName());

//--------------------------------------------------------------

// function Person(fname, lname) {
//     this.firstName = fname;
//     this.lastName = lname;
// };

// Person.prototype.getFullName = function () {
//     return this.firstName + ' ' + this.lastName;
// };

// function SuperHero(fname, lname) {
//     Person.call(this, fname, lname);
//     this.isSuperHero = true;
// };
// SuperHero.prototype.fightCrime = function () {
//     console.log('Fighting crime');
// };
// SuperHero.prototype = Object.create(Person.prototype);

// const batman = new SuperHero('John', 'Doe');
// console.log(batman.getFullName());
// SuperHero.prototype.constructor = SuperHero;

//----------------------------------------------------------------

// class Person {
//     constructor(fname, lname) {
//         this.firstName = fname;
//         this.lastName = lname;
//     }
//     sayMyName() {
//         return this.firstName + ' ' + this.lastName;
//     }
// };
// const classP1 = new Person('John', 'Doe');
// console.log(classP1.sayMyName());

// class SuperHero extends Person {
//     constructor(fname, lname) {
//         super(fname, lname)
//         this.isSuperHero = true;
//     }
//     fightCrime() {
//         console.log('Fighting crime');
//     }
// };
// const batman = new SuperHero('John', 'Doe');
// console.log(batman.sayMyName());

//-----------------------------------------------------------

// const obj = {
//     [Symbol.iterator]: function () {
//         let step = 0;
//         const iterator = {
//             next: function () {
//                 step++;
//                 if (step === 1) {
//                     return { value: 'Hello', done: false }
//                 } else if (step === 2) {
//                     return { value: 'World', done: false }
//                 }
//                 return { value: undefined, done: true }
//             }
//         };
//         return iterator;
//     }
// };
// for (const word of obj) {
//     console.log(word)
// };

//-------------------------------------------------------------

function normalFunction() {
    console.log('Hello');
    console.log('World');
};

// normalFunction();
// normalFunction();

function* generatorFunction() {
    yield 'Hello'
    yield 'World'
};

const generatorObj = generatorFunction();
for (const word of generatorObj) {
    console.log(word);
};

