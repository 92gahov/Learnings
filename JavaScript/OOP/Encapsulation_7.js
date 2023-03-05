// function newFunc() {
//     var x = "linuxhint.com";
//     console.log(x);
// }

// console.log(x);

/*------------------------------------------------*/

// var student = function() {
//     var name = "Georgi";
//     var expression = new RegExp(/\d+/);
//     return {
//         setName: function(value) {
//             if(expression.test(value)) {
//                 console.log("Invalid Name is entered");
//             } else {
//                 name = value;
//             }
//         },
//         getName: function() {
//             return name;
//         }
//     }
// }();

// console.log(student.getName());
// student.setName("Max");
// console.log(student.getName());
// student.setName(76);
// student.name = 76;
// console.log(student.getName());

/*-----------------------------------------*/

// let person = {
//     name: "Nathan"
// };

// console.log(person.name);

// person.name = "Sebhastion";
// console.log(person.name);

//Encapsulation with Class

// class Person {
//     #name = "Nathan";

//     getName() {
//         return this.#name;
//     }

//     setName(name) {
//         this.#name = name;
//     }
// };

// let person = new Person();
// // console.log(person.name);
// // console.log(person.#name);
// console.log(person.getName());
// person.setName("Georgi");
// console.log(person.getName());

//Encapsulation with Closure

function CreatePerson() {
    let name = "Nathan";
    return {
        getName: () => {
            return name;
        },
        setName: (newNAme) => {
            name = newNAme;
        }
    }
}

let person = CreatePerson();
console.log(person.name);
console.log(person.getName());
person.setName("John");
console.log(person.getName());