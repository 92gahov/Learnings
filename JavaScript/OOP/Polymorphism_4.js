// class A {
//     display() {
//         console.log("A is invoked")
//     }
// }

// class B extends A {};

// let b = new B();
// b.display();

/*---------------------------------------------*/

// class A {
//     display() {
//         console.log("A is invoked");
//     }
// }

// class B extends A {
//     display() {
//         console.log("B is invoked")
//     }
// }

// let a = [new A(), new B()];
// a.forEach(function (msg) {
//     msg.display();
// })

/*------------------------------------------*/

function A() { }
A.prototype.display = function () {
    return "A is invoked";
}

function B() { };
B.prototype = Object.create(A.prototype);
B.prototype.display = function () {
    return "B is invoked";
}

let a = [new A(), new B()];
a.forEach(function (msg) {
    console.log(msg.display());
})