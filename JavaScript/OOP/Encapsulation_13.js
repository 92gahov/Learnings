class Enemy {
    constructor(name, phrase, power) {
        this.name = name;
        this.phrase = phrase;
        this.power = power;
    }

    attack = () => console.log(`I'm attacking with a power of ${this.power}!`);
    sayPhrase = () => console.log(this.phrase)
}

// class Alien extends Enemy {
//     constructor(name, phrase, power, speed) {
//         super(name, phrase, power, speed);
//         this.species = "alien";
//     }

//     fly = () => console.log("Zzzzziiiinnnnggg");
// }

// const alien1 = new Alien("Ali", "I'm Ali the alien", 10, 50);

// console.log(alien1.name);
// console.log(alien1.phrase)
// alien1.sayPhrase();

/*---------------------------------------*/

class Alien extends Enemy {
    #birthYear;
    constructor(name, phrase, power, birthYear) {
        super(name, phrase, power);
        this.species = "alien";
        this.#birthYear = birthYear;
    }

    fly = () => console.log("Zzzzziiinnnggg");
    howOld = () => console.log(`I was born in ${this.#birthYear}`);
}

const alien1 = new Alien("Ali", "I'm Ali the alien", 10, 10000)
alien1.howOld();

// console.log(alien1.#birthYear); // This throws an error
console.log(alien1)