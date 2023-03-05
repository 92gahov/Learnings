// function Person(fName, lName) {
//     this.firstName = fName;
//     this.lastName = lName;
// };

// const person1 = new Person("Georgi", "Gahov");

// person1.getFullName = function() {
//     return this.firstName + " " + this.lastName;
// };

// console.log(person1.getFullName());


// function Person(fName, lName) {
//     this.firstName = fName;
//     this.lastName = lName;
// };

// const person1 = new Person("Georgi", "Gahov");

// Person.prototype.getFullName = function() {
//     return this.firstName + " " + this.lastName;
// };

// console.log(person1.getFullName());


function Person(fName, lName) {
    this.firstName = fName;
    this.lastName = lName;
};

Person.prototype.getFullName = function() {
    return this.firstName + " " + this.lastName;
};

function SuperHero(fName, lName) {
    Person.call(this, fName, lName);
    this.isSuperHero = true;
};
SuperHero.prototype.fightCrim = function() {
    console.log("Fighting crime");
};

SuperHero.prototype = Object.create(Person.prototype);

const batman = new SuperHero("Bruce", "Wayne");
SuperHero.prototype.constructor = SuperHero;
console.log(batman.getFullName());




