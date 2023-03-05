// var fname = "John";
// var lname = "Doe";
// var fullName = {fname, lname};
// console.log(fullName);


// var fname = "John";
// var lname = "Doe";
// var output = function() {
//     console.log(`${this.fname} ${this.lname}`);
// }
// var fullName = {fname, lname, output};
// fullName.output();


var fullName = {
    fname: "John",
    lname: "Doe",
    output() {
        console.log(`${this.fname} ${this.lname}`);
    }
};
fullName.output();