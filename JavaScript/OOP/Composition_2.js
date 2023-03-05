const Motor = {
    accelerate(motorspeed, incrementSpeed) {
        return motorspeed + incrementSpeed
    },
    decelerate(motorspeed, decrementSpeed) {
        return motorspeed + decrementSpeed
    }
}

const StopMotor = {
    stop(motorspeed) {
        this.motorspeed = 0;
        return 0;
    }
}

const Brand = {
    model: "Maxpro"
}

const Treadmill = function(Design, Motor, StopMotor) {
    const brand = Object.create(Design);
    const motor = Object.create(Motor);
    const stopmotor = Object.create(StopMotor);
    const props = {
        motorspeed: 0,
        model: brand.model
    }
    return {
        set(name, value) {
            props[name] = value
        },
        get(name) {
            return props[name]
        },
        log(name) {
            console.log(`${name}: ${props[name]}`)
        },
        slowDown() {
            props.motorspeed = motor.decelerate(props.motorspeed, 5)
        },
        speedUp() {
            props.motorspeed = motor.accelerate(props.motorspeed, 10)
        },
        stop() {
            props.motorspeed = stopmotor.stop(props.motorspeed)
        }
    }
}

const Treadmill1 = Treadmill(Brand, Motor, StopMotor);

Treadmill1.speedUp();
Treadmill1.log("motorspeed");
Treadmill1.slowDown();
Treadmill1.log("motorspeed");
Treadmill1.stop();
Treadmill1.log("motorspeed");
Treadmill1.log("model");

Treadmill1.set("model", "PowerMax");
Treadmill1.log("model");