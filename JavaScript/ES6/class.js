// function Holiday(destination, days) {
//     this.destination = destination;
//     this.days = days;
// };
// Holiday.prototype.info = function() {
//     console.log(this.destination + " " + this.days + " " + " days");
// };
// var Greece = new Holiday("Greece", 30);
// Greece.info();


// class Holiday {
//     constructor(destination, days) {
//         this.destination = destination;
//         this.days = days;
//     }
//     info() {
//         console.log(`${this.destination} will take ${this.days} days`);
//     }
// };
// const trip = new Holiday("Greece", 30);
// trip.info();


class Holiday {
    constructor(destination, days) {
        this.destination = destination;
        this.days = days;
    }
    info() {
        console.log(`${this.destination} will take ${this.days} days.`);
    }
};
class Trip extends Holiday {
    constructor(destination, days, weather) {
        super(destination, days);
        this.weather = weather;
    }
    info() {
        super.info();
        console.log(`I hope the weather will be ${this.weather[0]}.`);
    }
};
const Trip2 = new Trip("Italy", 20, ["sunny", "cloudy", "rainy"]);
Trip2.info();
