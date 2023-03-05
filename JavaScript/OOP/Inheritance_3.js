// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     greet() {
//         console.log(`Hello ${this.name}`)
//     }
// }

// class Student extends Person {}

// let student1 = new Student("John");
// student1.greet();

/*----------------------------------------*/

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     greet() {
//         console.log(`Hello ${this.name}`)
//     }
// }

// class Student extends Person {
//     constructor(name) {
//         console.log("Creating student class");
//         super(name);
//     }
// }

// let student1 = new Student("John");
// student1.greet();

/*-------------------------------------------*/

class Person {
    constructor(name) {
        this.name = name;
        this.occupation = "unemployed";
    }
    greet() {
        console.log(`Hello ${this.name}`)
    }
}

class Student extends Person {
    constructor(name) {
        super(name);
        this.occupation = "student"
    }
    greet() {
        console.log(`Hello student ${this.name}`);
        console.log(`occupation: ${this.occupation}`)
    }
}

let student1 = new Student("John");
student1.greet();