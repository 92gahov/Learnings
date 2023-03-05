// Data encapsulation with getter and setter

// let obj = {
//     v: 0,
//     get prop() {
//         return this.v;
//     },
//     set prop(newValue) {
//         this.v = newValue
//     }
// };

// console.log(obj.prop);
// obj.prop = 42;
// console.log(obj.prop);

/*------------------------------------------*/

// let obj = {
//     get prop() {
//         return 2;
//     }
// }

// console.log(obj.prop);
// obj.prop = 42;
// console.log(obj.prop);

/*-----------------------------------------------*/

// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     get fullName() {
//         return this.firstName + " " + this.lastName;
//     },
//     set fullName(name) {
//         let words = name.toString().split(' ');
//         this.firstName = words[0] || "";
//         this.lastName = words[1] || "";
//     }
// }

// person.fullName = "Jane Doe";
// console.log(person.firstName);
// console.log(person.lastName);

/*----------------------------------------*/

let person = {
    firstName: "John",
    lastName: "Doe"
}

Object.defineProperty(person, "fullName", {
    get: function() {
        return this.firstName + " " + this.lastName;
    },
    set: function(name) {
        let words = name.split(' ');
        this.firstName = words[0] || "";
        this.lastName = words[1] || "";
    }
});

console.log(person.fullName);
person.fullName = "Jane Doe";
console.log(person.fullName);