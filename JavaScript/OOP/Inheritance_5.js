// Prototypal Inheritance

// function Animal(legs) {
//     this.legs = legs;
// }

// Animal.prototype.walk = function() {
//     console.log(`Walking on ${this.legs} legs`)
// }

// function Bird(legs) {
//     Animal.call(this, legs);
// }

// Bird.prototype = Object.create(Animal.prototype);
// Bird.prototype.constructor = Animal;

// Bird.prototype.fly = function() {
//     console.log("Flying");
// }

// let pigeopn = new Bird(2);
// pigeopn.walk();
// pigeopn.fly();

/*------------------------------------------*/

// Class

// class Animal {
//     constructor(legs) {
//         this.legs = legs;
//     }
//     walk() {
//         console.log(`Walking on ${this.legs} legs`)
//     }
// }

// class Bird extends Animal {
//     constructor(legs) {
//         super(legs);
//     }
//     fly() {
//         console.log("Flying")
//     }
// }

// let bird = new Bird(2);
// bird.walk();
// bird.fly();

/*------------------------------------------------*/

// Shadowing methods

// class Animal {
//     constructor(legs) {
//         this.legs = legs;
//     }
//     walk() {
//         console.log(`Walking on ${this.legs} legs`)
//     }
// }

// class Dog extends Animal {
//     constructor() {
//         super(4)
//     }
//     walk() {
//         super.walk();
//         console.log("Go walking")
//     }
// }

// let dog = new Dog()
// dog.walk();

/*-----------------------------------------------*/

// Inheriting static members

// class Animal {
//     constructor(legs) {
//         this.legs = legs;
//     }
//     walk() {
//         console.log(`Walking on ${this.legs} legs`);
//     }
//     static helloWorld() {
//         console.log("Hello World")
//     }
// }

// class Bird extends Animal {
//     fly() {
//         console.log("Flying")
//     }
// }

// Bird.helloWorld();

/*------------------------------------------------*/

// Inheriting from built-in types

class Queue extends Array {
    enqueue(e) {
        super.push(e)
    }
    dequeue() {
        return super.shift()
    }
    peel() {
        return !this.empty() ? this[0] : undefined;
    }
    empty() {
        return this.length === 0;
    }
}

let customers = new Queue();
customers.enqueue("A");
customers.enqueue("B");
customers.enqueue("C");

while (!customers.empty()) {
    console.log(customers.dequeue());
}