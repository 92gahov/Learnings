// class Enemy {
//     constructor(power) {
//         this.power = power;
//     }
//     attack = () => console.log(`I'm attacking with a power of ${this.power}!`);
// }

// class Alien extends Enemy {
//     constructor(name, phrase, power) {
//         super(power);
//         this.name = name;
//         this.phrase = phrase;
//         this.species = "alien"
//     }
//     fly = () => console.log("Zzzzziiiinnnnggg");
//     sayPhrase = () => console.log(this.phrase)
// }

// const alien1 = new Alien("Ali", "I'm Ali the alien!", 10);
// const alien2 = new Alien("Lien", "Run for your lives!", 15);

// alien1.attack();
// console.log(alien2.power);

/*---------------------------------------------*/

// class Character {
//     constructor(speed) {
//         this.speed = speed
//     }
//     move = () => console.log(`I'm moving at the speed of ${this.speed}!`);
// }

// class Enemy extends Character {
//     constructor(power, speed) {
//         super(speed);
//         this.power = power;
//     }
//     attack = () => console.log(`I'm attacking with a power of ${this.power}!`);
// }

// class Alien extends Enemy {
//     constructor(name, phrase, power, speed) {
//         super(power, speed);
//         this.name = name;
//         this.phrase = phrase;
//         this.species = "alien";
//     }
//     fly = () => console.log("Zzzzziiiinnnggg");
//     sayPhrase = () => console.log(this.phrase);
// }

// const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50);
// const alien2 = new Alien("Lien", "Run for your lives!", 15, 60);

// alien1.move();
// console.log(alien2.speed);

/*-------------------------------------------*/

class Character {
    constructor(speed) {
        this.speed = speed;
    }
    move = () => console.log(`I'm moving at the speed of ${this.speed}!`);
}

class Enemy extends Character {
    constructor(name, phrase, power, speed) {
        super(speed);
        this.name = name;
        this.phrase = phrase;
        this.power = power;
    }
    sayPhrase = () => console.log(this.phrase);
    attack = () => console.log(`I'm attacking with a power of ${this.power}!`);
}

class Alien extends Enemy {
    constructor(name, phrase, power, speed) {
        super(name, phrase, power, speed);
        this.species = "alien";
    }
    fly = () => console.log("Zzzziiiinnnnggg");
}

class Bug extends Enemy {
    constructor(name, phrase, power, speed) {
        super(name, phrase, power, speed);
        this.species = "bug";
    }
    hide = () => console.log("You can't catch me now!");
}

class Robot extends Enemy {
    constructor(name, phrase, power, speed) {
        super(name, phrase, power, speed);
        this.species = "robot";
    }
    transform = () => console.log("Optimus prime!");
}

const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50)
const alien2 = new Alien("Lien", "Run for your lives!", 15, 60)
const bug1 = new Bug("Buggy", "Your debugger doesn't work with me!", 25, 100)
const bug2 = new Bug("Erik", "I drink decaf!", 5, 120)
const Robot1 = new Robot("Tito", "I can cook, swim and dance!", 125, 30)
const Robot2 = new Robot("Terminator", "Hasta la vista, baby!", 155, 40)

alien1.move();
bug1.hide();
Robot1.sayPhrase();
console.log(Robot2.name);