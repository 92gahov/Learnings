// Encapsulation using Closures

let student = function () {
    let name = "John";
    return {
        setName: function (value) {
            console.log(value)
        },
        getName: function () {
            return name;
        }
    }
}();

console.log(student.getName());
student.setName("Doe");
console.log(student.getName());
student.setName("Jane");
console.log(student.getName());