function Car(model) {
    this.model = model;
    this.gear = 1;

    this.doSomeMagicWithGearStick = function () {
        console.log(`I am doing something very complicated thing for the gear ${this.gear}`);
    }

    this.changeGear = function (changeTo) {
        if (changeTo > 5) {
            throw new Error("Gear cannot be more than 5");
        }

        this.gear = changeTo;
        this.doSomeMagicWithGearStick()
    }
}

let car = new Car("Toyota Corolla");
car.changeGear(3);

/*----------------------------------------------*/

// function Car(model) {
//     this.model = model;
//     var gear = 1;

//     var doSomeMagicWithGearStick = function () {
//         console.log(`I am doing something very complicated thing for the gear ${gear}`);
//     }

//     this.changeGear = function (changeTo) {
//         if (changeTo > 5) {
//             throw new Error("Gear cannot be more than 5");
//         }
//         gear = changeTo;
//         doSomeMagicWithGearStick();
//     }
// }

// let car = new Car("Toyota Corolla");
// car.changeGear(2)

/*------------------------------------------*/

// function Car(model) {
//     this.model = model;
//     if (this.constructor === Car) {
//         throw new Error("You cannot create an instance of abstract class");
//     }
// }

// Car.prototype.showModel = function() {
//     return this.model;
// }

// let car = new Car("Toyota");

/*--------------------------------------------*/

// function Car(model) {
//     this.model = model;
//     if (this.constructor === Car) {
//         throw new Error("You cannot create an instance of abstract class");
//     }
// }

// Car.prototype.showModel = function () {
//     return `Car model is ${this.model}`
// }

// function Toyota(model) {
//     this.model = model;
// }

// Toyota.prototype = Object.create(Car.prototype);
// let car1 = new Toyota("Toyota");
// console.log(car1.showModel());

