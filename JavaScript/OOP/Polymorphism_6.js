// Inheritance Polymorphism

// class firstClass {
//     add() {
//         console.log("First Method")
//     }
// }

// class secondClass extends firstClass {
//     add() {
//         console.log(30 + 40)
//     }
// }

// class thirdClass extends secondClass {
//     add() {
//         console.log("Last Method")
//     }
// }

// let ob = new firstClass();
// let ob2 = new secondClass();
// let ob3 = new thirdClass();

// ob.add();
// ob2.add();
// ob3.add();

/*-------------------------------------------------*/

// Polymorphism with Functions and Objects

class A {
    area(x,y) {
        console.log(x * y)
    }
}

class B extends A {
    area(a,b) {
        super.area(a,b)
    }
}

let ob = new B();
let output = ob.area(100, 200)