class Character {
    constructor(speed) {
        this.speed = speed
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
    fly = () => console.log("ZZzzzziiinnngngg");
}

class Alien extends Enemy {
    constructor(name, phrase, power, speed) {
        super(name, phrase, power, speed);
        this.species = "alien";
    }
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

const bug1 = new Bug("Buggy", "Your debugger doesn't work with me!", 25, 100);

const addFlyingAbility = obj => {
    obj.fly = () => console.log(`Now ${obj.name} can fly!`);
}

addFlyingAbility(bug1);
bug1.fly();