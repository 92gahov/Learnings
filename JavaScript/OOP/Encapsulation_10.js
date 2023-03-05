class Employee {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }

    getEmp() {
        return this.name + " " + this.id;
    }

    setEmp(name, id) {
        this.name = name;
        this.id = id;
    }
}

let emp1 = new Employee();
let emp2 = new Employee();

emp1.setEmp("John", 20);
console.log(emp1.getEmp());
emp2.setEmp("Doe", 30);
console.log(emp2.getEmp());
