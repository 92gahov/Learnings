class Pizza {
    constructor(size, crust, sauce) {
        this.size = size;
        this.crust = crust;
        this.sauce = sauce;
        this.toppings = [];
    }
    prepare() { console.log("Prparing...") }
    bake() { console.log("Baking...") }
    ready() { console.log("Ready!") }
};

// Problem: Repeating methods - Not D.R.Y
class Salad {
    constructor(size, dressing) {
        this.size = size;
        this.dressing = dressing;
    }
    prepare() { console.log("Preaparing...") }
    toss() { console.log("Tossing...") }
    ready() { console.log("Ready!") }
};

class stuffCrustPizza extends Pizza {
    stuff() { console.log("Stuffing the crust...") }
};

class butterCrustPizza extends Pizza {
    butter() { console.log("Buttering the crust...") }
};

// Problem: Repeating methods - Not D.R.Y
class stuffButterCrustPizza extends Pizza {
    stuff() { console.log("Stuffing the crust...") }
    butter() { console.log("Buttering the crust...") }
};

const myPizza = new stuffButterCrustPizza();
myPizza.stuff();
myPizza.butter();

//////////////////////////////////////////////////

// Instead, use composition for methods
const prepare = () => {
    return {
        prepare: () => console.log("Preparing...")
    }
};

const bake = () => {
    return {
        bake: () => console.log("Baking...")
    }
};

const toss = () => {
    return {
        toss: () => console.log("Tossing")
    }
};

const ready = () => {
    return {
        ready: () => console.log("Ready!")
    }
};

const stuff = () => {
    return {
        stuff() { console.log("Stuffing the crust...") }
    }
};

const butter = () => {
    return {
        butter() { console.log("Buttering the crust...") }
    }
};

const createPizza = (size, crust, sauce) => {
    const pizza = {
        size: size,
        crust: crust,
        sauce: sauce,
        toppings: []
    }
    return {
        ...pizza,
        ...prepare(),
        ...bake(),
        ...ready()
    }
};

const createSalad = (size, dressing) => {
    return {
        size: size,
        dressing: dressing,
        ...prepare(),
        ...toss(),
        ...ready()
    }
};

// Compare to ES6 Class syntax with extends and super()
const createStuffedButteredCrustPizza = (pizza) => {
    return {
        ...pizza,
        ...stuff(),
        ...butter()
    }
};

const anotherPizza = createPizza("medium", "thin", "original");
const somebodysPizza = createStuffedButteredCrustPizza(anotherPizza);
// OR
const georgisPizza = createStuffedButteredCrustPizza(createPizza("medium", "thin", "original"));

const georgisSalad = createSalad("side", "ranch");

georgisPizza.bake();
georgisPizza.stuff();
georgisSalad.prepare();
console.log(georgisPizza);
console.log(georgisSalad);

///////////////////////////////////////////////////

const addTopping = (pizza, topping) => {
    pizza.toppings.push(topping);
    return pizza;
};

// We need to clone the pizza object to avoid mutation
// Function composition:
const shallowPizzaClone = (fn) => {
    return (obj, array) => {
        const newObj = { ...obj };
        return fn(newObj, array)
    }
};

let addToppings = (pizza, toppings) => {
    pizza.toppings = [...pizza.toppings, ...toppings];
    return pizza;
};

// Decorate the addToppings function with shallowPizzaClone
addToppings = shallowPizzaClone(addToppings);