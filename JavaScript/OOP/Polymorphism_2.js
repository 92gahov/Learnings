class Character {
    constructor(speed) {
        this.speed = speed
    }
    move = () => console.log(`I'm moving at the speed of ${this.speed}`);
}

class Enemy extends Character {
    constructor(name, phrase, power, speed) {
        super(speed);
        this.name = name;
        this.phrase = phrase;
        this.power = power
    }
    sayPhrase = () => console.log(this.phrase);
    attack = () => console.log(`I'm attacking with a power of ${this.power}!`);
}

class Alien extends Enemy {
    constructor(name, phrase, power, speed) {
        super(name, phrase, power, speed);
        this.species = "alien";
    }
    fly = () => console.log("ZZzziiiinnnggg");
    // attack = () => console.log("Now I'm doing a different thing, HA!");
}

const aline1 = new Alien("Ali", "I'm Ali the alien!", 10, 50);
aline1.attack();