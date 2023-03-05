// class Animal {
//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }
//     run(speed) {
//         this.speed = speed;
//         console.log(`${this.name} runs with speed ${this.speed}`);
//     }
//     stop() {
//         this.speed = 0;
//         console.log(`${this.name} stands still`)
//     }
// }

// let animal = new Animal("My animal");
// animal.run(3);

// class Rabbit extends Animal {
//     hide() {
//         console.log(`${this.name} hides`)
//     }
// }

// let rabbit = new Rabbit("White Rabbit");
// rabbit.run(5);
// rabbit.hide();

/*-----------------------------------------------*/

// function f(phrase) {
//     return class {
//         sayHi() {
//             console.log(phrase);
//         }
//     }
// }

// class User extends f("Hello"){};
// new User().sayHi();

/*-----------------------------------------------*/

// Overriding a method

// class Animal {
//     constructor(name) {
//         this.speed = 0;
//         this.name = name
//     }
//     run(speed) {
//         this.speed = speed;
//         console.log(`${this.name} runs with speed ${this.speed}`)
//     }
//     stop() {
//         this.speed = 0;
//         console.log(`${this.name} stands still`)
//     }
// }

// class Rabbit extends Animal {
//     hide() {
//         console.log(`${this.name} hides`)
//     }
//     stop() {
//         super.stop();
//         this.hide()
//     }
// }

// let rabbit = new Rabbit("White Rabbit");
// rabbit.run(5);
// rabbit.stop();

/*---------------------------------------------*/

// Overriding constructor

// class Animal {
//     constructor(name) {
//         this.speed = 0;
//         this.name = name;
//     }
// }

// class Rabbit extends Animal {
//     constructor(name, earLength) {
//         super(name);
//         this.earLength = earLength
//     }
// }

// let rabbit = new Rabbit("White Rabbit", 10);
// console.log(rabbit.name);
// console.log(rabbit.earLength);

/*---------------------------------------------*/

// Overriding class field: a tricky note

// class Animal {
//     name = "animal";
//     constructor() {
//         console.log(this.name)
//     }
// }

// class Rabbit extends Animal {
//     name = "rabbit";
// }

// new Animal();
// new Rabbit();

////

// class Animal {
//     showName() {
//         console.log("animal");
//     }
//     constructor() {
//         this.showName();
//     }
// }

// class Rabbit extends Animal {
//     showName() {
//         console.log("rabbit")
//     }
// }

// new Animal();
// new Rabbit();

/*------------------------------------------------*/

// Super: internals, [[HomeObject]]

// let animal = {
//     name: "Animal",
//     eat() {
//         console.log(`${this.name} eats`);
//     }
// }

// let rabbit = {
//     __proto__: animal,
//     name: "Rabbit",
//     eat() {
//         this.__proto__.eat.call(this);
//     }
// }

// rabbit.eat();

//////

// let animal = {
//     name: "Animal",
//     eat() {
//         console.log(`${this.name} eats`)
//     }
// }

// let rabbit = {
//     __proto__: animal,
//     eat() {
//         this.__proto__.eat.call(this)
//     }
// }

// let longEar = {
//     __proto__: rabbit,
//     eat() {
//         this.__proto__.eat.call(this)
//     }
// }

// longEar.eat(); // Error: Maximum call stack size exceeded

/*-------------------------------------------------*/

// [[HomeObject]]

let animal = {
    name: "Animal",
    eat() {
        console.log(`${this.name} eats`)
    }
}

let rabbit = {
    __proto__: animal,
    name: "Rabbit",
    eat() {
        super.eat()
    }
}

let longEar = {
    __proto__: rabbit,
    name: "Long Ear",
    eat() {
        super.eat()
    }
}

longEar.eat();