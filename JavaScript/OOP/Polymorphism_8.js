class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} eats food`)
    }
}

class Alligator extends Animal {
    eat() {
        super.eat();
        console.log(`${this.name} eats fishes`)
    }
}

let murphy = new Alligator("Murphy");
murphy.eat();

// let animal = new Animal("Dog");
// animal.eat();