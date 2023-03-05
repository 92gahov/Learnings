// Prototypal Inheritance

// const arr = [1,2,3];
// console.log(arr);

// const arr2 = [1,2,3];
// console.log(Object.getPrototypeOf(arr2));

// const arr3 = [1,2,3];
// const arr3Proto = Object.getPrototypeOf(arr3);
// console.log(Object.getPrototypeOf(arr3Proto));

/*--------------------------------------------*/

// Class

// class Alien {
//     constructor(name, phrase) {
//         this.name = name;
//         this.phrase = phrase;
//         this.species = "alien"
//     }
//     fly = () => console.log("Zzziiinnnggg");
//     sayPhrase = () => console.log(this.phrase);
// }

// const alien1 = new Alien("Ali", "I'm Ali the alien!");
// console.log(alien1.name);

/*--------------------------------------------*/

function Alien(name, phrase) {
    this.name = name;
    this.phrase = phrase;
    this.species = "alien";
}

Alien.prototype.fly = () => console.log("ZZzzziiinnngg");
Alien.prototype.sayPhrase = () => console.log(this.phrase);

const alien1 = new Alien("Ali", "I'm Ali the alien!");

console.log(alien1.name);
console.log(alien1.phrase);
alien1.fly();