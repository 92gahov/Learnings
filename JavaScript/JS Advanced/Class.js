class Person {
    constructor(fName, lName) {
        this.firstName = fName;
        this.lastName = lName;
    }
    sayMyName() {
        return this.firstName + " " + this.lastName;
    }
}

const classP1 = new Person("Georgi", "Gahov");
console.log(classP1.sayMyName());

class SuperHero extends Person {
    constructor(fName, lName) {
        super(fName, lName);
        this.isSuperHero = true;
    }
    fightCrim() {
        console.log("Fighting crime")
    }
};

const batman = new SuperHero("Bruce", "Wayne");
console.log(batman.sayMyName());