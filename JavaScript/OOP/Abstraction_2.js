// let Shape = function() {
//     this.shapeName = "none";
//     throw new Error("Cannot create an instance of abstract class");
// }

// Shape.prototype.draw = function() {
//     return "Drawing" + " " + this.shapeName;
// }

// // let shape1 = new Shape();

// let Circle = function(shapeName) {
//     this.shapeName = shapeName;
// }

// Circle.prototype = Object.create(Shape.prototype);

// let circle1 = new Circle("Circle");
// console.log(circle1.draw());
// console.log(circle1 instanceof Circle);
// console.log(circle1 instanceof Shape);

/*-----------------------------------*/

class Person {
    constructor({ firstName, lastName, job }) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.job = job;
        this.skills = [];
        Person._amount = Person._amount || 0;
        Person._amount++;
    }

    static get amount() {
        return Person._amount;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    set fullName(fN) {
        if (/[A-Za-z]\s[A-Za-z]/.test(fN)) {
            [this.firstName, this.lastName] = fN.split(" ");
        } else {
            throw Error("Bad fullname");
        }
    }

    learn(skill) {
        this.skills.push(skill)
    }
}

class Job {
    constructor(company, position, salary) {
        this.company = company;
        this.position = position;
        this.salary = salary;
    }
}

console.log(Person.amount)

const john = new Person({
    firstName: "John",
    lastName: "Doe",
    job: new Job("Youtube", "developer", 2000)
})

console.log(Person.amount);

const roger = new Person({
    firstName: "Roger",
    lastName: "Feder",
    job: new Job("Facebook", "writer", 2500)
})

console.log(Person.amount);

john.fullName = "Jane Doe";

john.learn("es6");
john.learn("es7");

roger.learn("history");

console.log(john);
console.log(roger);