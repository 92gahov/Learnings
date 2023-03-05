function Employee(name, age, baseSalary) {
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;

    let monthlyBonus = 1500;

    let calculateFinalSalart = function () {
        let finalSalary = baseSalary + monthlyBonus;
        console.log(`Final salary is ${finalSalary}`)
    }

    this.getEmpDetails = function () {
        console.log(`Name: ${this.name} | Age: ${this.age}`);
        calculateFinalSalart();
    }
};

let emp1 = new Employee("John", 30, 2000)
emp1.getEmpDetails();
