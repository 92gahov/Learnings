// function Vehicle(vehicleName) {
//     this.vehicleName = vehicleName;
//     throw new Error("You cannot create an instance of abstract class");
// }

// Vehicle.prototype.display = function() {
//     return this.vehicleName;
// }

// let vehicle = new Vehicle();

/*-------------------------------------------*/

function Vehicle(vehicleName) {
    this.vehicleName = vehicleName;
    throw new Error("You cannot create an instance of abstract class");
}

Vehicle.prototype.display = function () {
    return `Vehicle is: ${this.vehicleName}`
}

function Bike(vehicleName) {
    this.vehicleName = vehicleName;
}

Bike.prototype = Object.create(Vehicle.prototype);
let bike = new Bike("Honda");
console.log(bike.display());

console.log(bike instanceof Vehicle);
console.log(bike instanceof Bike);