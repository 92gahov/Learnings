// Create Abstract Class

// function Person() {
//     this.name = "John";
//     if (this.constructor === Person) {
//         throw new Error("You cannot create an instance of abstract class")
//     }
// }

// Person.prototype.info = function() {
//     return this.name;
// }

// let person = new Person();

/*---------------------------------------------*/

// Extend Abstract Class

// function Person() {
//     this.name = "John";
//     if (this.constructor === Person) {
//         throw new Error("You cannot create an instance of abstract class");
//     }
// }

// Person.prototype.info = function() {
//     return `Person name is: ${this.name}`;
// }

// function Teacher(name) {
//     this.name = name;
// }

// Teacher.prototype = Object.create(Person.prototype);
// let teacher = new Teacher("Jane");
// console.log(teacher.info());

/*-----------------------------------------------*/

// Implement Abstraction

class Person {
    constructor() {
        if (this.constructor === Person) {
            throw new Error("You cannot create an instance of abstract class");
        }
    }
    info() {
        throw new Error("Added abstract Method has no implementation");
    }
}

class Teacher extends Person {
    info() {
        // super.info();
        console.log("I am a Teacher");
    }
}

let teacher = new Teacher();
teacher.info();