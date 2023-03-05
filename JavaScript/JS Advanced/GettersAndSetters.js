// // Getter------------------------------

// const student = {


//     // data property
//     firstName: "John",

//     // accessor property
//     get getName() {
//         return this.firstName
//     }
// };

// // accessing data property
// console.log(student.firstName);

// // accessing getter methods
// console.log(student.getName);

// // trying to access as a method
// console.log(student.getName()) // error

// Setter--------------------------------------------

// const student = {
//     firstName: "John",

//     // accessor property
//     set changeName(newName) {
//         this.firstName = newName;
//     }
// }

// console.log(student.firstName); // John

// // change object property using a setter
// student.changeName = "Doe";

// console.log(student.firstName); // Doe

// Object.defineProperty()------------------------------

// const student = {
//     firstName: "John"
// }

// // getting property
// Object.defineProperty(student, "getName", {
//     get: function () {
//         return this.firstName
//     }
// });

// // setting property
// Object.defineProperty(student, "changeName", {
//     set: function (value) {
//         this.firstName = value;
//     }
// })

// console.log(student.firstName); // John

// // changing the property value
// student.changeName = "Doe";

// console.log(student.firstName); // Doe

/*---------------------------------------------*/

// let user = {
//     name: "John",
//     surname: "Doe",

//     get FullName() {
//         return `${this.name} ${this.surname}`
//     },
//     set FullName(value) {
//         [this.name, this.surname] = value.split(" ");
//     }
// }

// console.log(user.FullName);
// user.FullName = "Bon Jovi";
// console.log(user.FullName);

/*---------------------------------------------*/

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }

// let person = new Person("John");
// console.log(person.name);

/*--------------------------------------------*/

// class Person {
//     constructor(name) {
//         this.setName(name);
//     }
//     getName() {
//         return this.name
//     }
//     setName(newName) {
//         newName = newName.trim();
//         if (newName === "") {
//             throw "The name cannot be empty"
//         }
//         this.name = newName;
//     }
// }

// let person = new Person("John");
// console.log(person);

// person.setName("Doe");
// console.log(person.getName());

/*-------------------------------------------*/

// class Person {
//     constructor(name) {
//         this.name = name;
//     }
//     get name() {
//         return this._name;
//     }
//     set name(newName) {
//         newName = newName.trim();
//         if( newName === "") {
//             throw "The name cannot be empty";
//         }
//         this._name = newName
//     }
// }

// let person = new Person("John");
// console.log(person.name);
// person.name = "Doe";
// console.log(person.name);

/*------------------------------------------*/

let meeting = {
    attendees: [],
    add(attendee) {
        console.log(`${attendee} joined the meeting`);
        this.attendees.push(attendee);
        return this;
    },
    get latest() {
        let count = this.attendees.length;
        return count == 0 ? undefined : this.attendees[count - 1];
    }
}

meeting.add("John").add("Doe").add("Jane");
console.log(`The latest attendee is ${meeting.latest}`);







