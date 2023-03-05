// Using Polymorphism in JavaScript

// class Animal {
//     speak() {
//         console.log("Animals have different sounds")
//     }
// }

// class Cat extends Animal{}

// class Dog extends Animal{}

// let cat = new Cat();
// cat.speak();
// let dog = new Dog();
// dog.speak();

/*---------------------------------------------------*/

// Using Polymorphism with Method Overriding in JavaScript

class Animal {
    speak() {
        console.log("Animals have different sounds")
    }
}

class Cat extends Animal {
    speak() {
        console.log("Cat says Meow Meow")
    }
}

class Dog extends Animal {
    speak() {
        console.log("Dog say Woof Woof")
    }
}

let x = [new Cat(), new Dog()];
x.forEach(function (info) {
    info.speak();
})