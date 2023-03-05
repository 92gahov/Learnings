// Javascript Classes

// class Pizza {
//     constructor(pizzaType, pizzaSize) {
//         this.type = pizzaType;
//         this.size = pizzaSize;
//         this.crust = "original";
//     }
//     bake() {
//         console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`);
//     }
// };

// const myPizza = new Pizza("pepperoni", "small");
// myPizza.bake();
// console.log(myPizza.type);

/////////////////////////////////////////////////////

// class Pizza {
//     constructor(pizzaType, pizzaSize) {
//         this.type = pizzaType;
//         this.size = pizzaSize;
//         this.crust = "original";
//     }
//     get pizzaCrust() {
//         return this.crust
//     }
//     set pizzaCrust(pizzaCrust) {
//         this.crust = pizzaCrust;
//     }
//     bake() {
//         console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`);
//     }
// };

// const myPizza = new Pizza("pepperoni", "small");
// myPizza.pizzaCrust = "thin";
// myPizza.bake();
// console.log(myPizza.pizzaCrust);

/////////////////////////////////////////////////////

// class Pizza {
//     constructor(pizzaType, pizzaSize) {
//         this.type = pizzaType;
//         this.size = pizzaSize;
//         this.crust = "original";
//     }
//     getCrust() {
//         return this.crust
//     }
//     setCrust(pizzaCrust) {
//         this.crust = pizzaCrust;
//     }
//     bake() {
//         console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`);
//     }
// };

// const myPizza = new Pizza("pepperoni", "small");
// myPizza.setCrust("thin");
// myPizza.bake();
// console.log(myPizza.getCrust());

////////////////////////////////////////////////////

// class Pizza {
//     constructor(pizzaType, pizzaSize) {
//         this.type = pizzaType;
//         this.size = pizzaSize;
//         this.crust = "original";
//         this.toppings = [];
//     }
//     getCrust() {
//         return this.crust
//     }
//     setCrust(pizzaCrust) {
//         this.crust = pizzaCrust;
//     }
//     getToppings() {
//         return this.toppings;
//     }
//     setToppings(topping) {
//         this.toppings.push(topping);
//     }
//     bake() {
//         console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`);
//     }
// };

// const myPizza = new Pizza("pepperoni", "small");
// myPizza.setCrust("thin");
// myPizza.bake();
// myPizza.setToppings("sousage");
// myPizza.setToppings("olives");
// console.log(myPizza.setToppings());

///////////////////////////////////////////////////

// class Pizza {
//     constructor(pizzaSize) {
//         this.size = pizzaSize;
//         this.crust = "original";
//     }
//     getCrust() {
//         return this.crust
//     }
//     setCrust(pizzaCrust) {
//         this.crust = pizzaCrust;
//     }
// };

// class SpecialtyPizza extends Pizza {
//     constructor(pizzaSize) {
//         super(pizzaSize);
//         this.type = "The Works";
//     }
//     slice() {
//         console.log(`Our ${this.type} ${this.size} pizza has 8 slices.`)
//     }
// };

// const mySpecialty = new SpecialtyPizza("medium");
// mySpecialty.slice();

////////////////////////////////////////////////////

// class Pizza {
//     constructor(pizzaSize) {
//         this._size = pizzaSize;
//         this._crust = "original";
//     }
//     getCrust() {
//         return this._crust
//     }
//     setCrust(pizzaCrust) {
//         this._crust = pizzaCrust;
//     }
// };

////////////////////////////////////////////////////

// Factory Function

// function pizzaFactory(pizzaSize) {
//     const crust = "original";
//     const size = pizzaSize;
//     return {
//         bake: () => console.log(`Baking a ${size} ${crust} crust pizza.`)
//     }
// };

// const myPizza = pizzaFactory("small");
// myPizza.bake();

/////////////////////////////////////////////////////

class Pizza {
    crust = "original";
    #sauce = "traditional";
    #size;
    constructor(pizzaSize) {
        this.#size = pizzaSize;
    }
    getCrust() {
        return this.crust
    }
    setCrust(pizzaCrust) {
        this.crust = pizzaCrust;
    }
    hereYouGo() {
        console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`);
    }
};

const myPizza = new Pizza("large");
myPizza.hereYouGo();

console.log(myPizza.getCrust());
console.log(myPizza.size);
console.log(myPizza.crust);
// console.log(myPizza.#size);





