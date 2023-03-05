// let employee = {
//     name: "John"
// }
// console.log(employee.name);
// employee.name = "Doe";
// console.log(employee.name);

/*---------------------------------------------*/

// let employee = {
//     name: "John",
//     setName: (value) => {
//         let exp = new RegExp(/\d+/);
//         if (exp.test(value)) {
//             console.log("Invalid name")
//         } else {
//             this.name = value;
//         }
//     },
//     getName: () => {
//         return this.name;
//     }
// };

// console.log(employee.getName());
// employee.setName("Doe");
// console.log(employee.getName());
// employee.setName(40);
// console.log(employee.getName());

/*----------------------------------------------*/

// function fnScope() {
//     var employee = "John";
//     console.log(employee)
// }

// console.log(employee);

/*--------------------------------------------*/
//Closures

// var employee = function () {
//     var name = "John";
//     var exp = new RegExp(/\d+/);
//     return {
//         setName: (value) => {
//             if (exp.test(value)) {
//                 console.log("Invalid name")
//             } else {
//                 name = value
//             }
//         },
//         getName: () => {
//             return name
//         }
//     }
// }();

// console.log(employee.getName())
// employee.setName("Doe");
// console.log(employee.getName());
// console.log(name);
// console.log(employee.name)

function name() {
    let name = "Georgi";

    function getName() {
        console.log("Hello " + name)
    }
    return getName();
}

name();


