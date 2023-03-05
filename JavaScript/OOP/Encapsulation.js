class Car {
    constructor(model, speedLimit) {
        this.model = model;
        this.speedLimit = speedLimit,
            this.speed = 0;
        this.engine = false;
    }

    setSpeed(speed) {
        return new Promise((resoleve, reject) => {
            if (this.engine === false) {
                reject("Please turn on engine")
            } else if (this.speedLimit < speed) {
                reject("Speed should be less then " + this.speedLimit)
            } else {
                const interval = setInterval(() => {
                    if (speed > this.speed) {
                        this.speed++;
                    } else if (speed < this.speed) {
                        this.speed--;
                    } else {
                        clearInterval(interval);
                        resoleve(speed);
                    }
                    console.log(this.speed);
                })
            }
        })
    }
    async drive(speed) {
        this.engine = true;
        await this.setSpeed(speed);
        console.log("Driving with speed ", this.speed);
    }
    async stop() {
        await this.setSpeed(0);
        this.engine = false;
        console.log("Car stopped");
    }
}

async function testDrive() {
    const car = new Car("Tesla", 100);
    try {
        await car.drive(30);
        console.log("Driving");
    } catch (err) {
        console.log(err);
    }
    await car.stop();
    console.log("Stopped");
}

testDrive();