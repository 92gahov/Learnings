function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.getFullName = function() {
    return this.firstName + " " + this.lastName;
}

function Student(firstName, lastName, schoolName, grade) {
    Person.call(this, firstName, lastName);
    this.ScoolName = schoolName;
    this.Grade = grade;
}

Student.prototype = new Person();
Student.prototype.constructor = Student;

let std = new Student("John", "Doe", "XYZ", 10);

console.log(std.getFullName());