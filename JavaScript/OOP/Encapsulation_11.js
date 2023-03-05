// Factory functions and closures

// function Hedgehog() {
//     let speed = 10000; // this is private
//     this.name = "Sonic";
//     this.zoom = () => {
//         // both name and speed are accessible from here
//         console.log(`${this.name} zooms with the speed of ${speed} miles per second`);
//     }
// }

// const sonic = new Hedgehog();
// sonic.zoom();

// console.log(sonic.name); // valid value
// console.log(sonic.speed); // undefined

/*----------------------------------------------*/

// class Hedgehog {
//     constructor() {
//         let speed = 10000; // this is private
//         this.name = "Sonic";
//         this.zoom = () => {
//             // can access both name and speed from here
//             console.log(`${this.name} zooms with the spee of ${speed} miles per second`)
//         }
//     }

//     jump() {
//         // cannot access speed from here
//         console.log(`${this.name} jumps on top of the building`)
//     }
// }

// const sonic = new Hedgehog();
// sonic.zoom();
// sonic.jump();
// console.log(sonic.name); // valid value 
// console.log(sonic.speed); // undefined

/*------------------------------------------------*/

// Weak maps and namespaces

// let Hedgehog = (function() {
//     let privateProps = new WeakMap();

//     class Hedgehog {
//         constructor(name) {
//             this.name = name; // this is public
//             privateProps.set(this, {speed: 10000}); // this is private
//             privateProps.set(this, {city: "somewhere"});
//         }

//         zoom() {
//             console.log(`${this.name}, from ${privateProps.get(this).city} zooms with the speed of ${privateProps.get(this).speed} miles per second`)
//         }
//     }

//     return Hedgehog;
// })();

// let sonic = new Hedgehog("Sonic");
// // sonic.zoom();
// console.log(sonic.zoom())

/*---------------------------------------------*/

// Using Symbols (kind of encapsulated)

let Hedgehog = (function () {
    const speed = Symbol();
    class Hedgehog {
        constructor(name) {
            this.name = name;
            this[speed] = 10000; // this is not directly accessible
        }

        zoom() {
            console.log(`${this.name} zooms with the speed of ${this[speed]} miles per second`)
        }
    }

    return Hedgehog;
})();

let sonic = new Hedgehog("Sonic");
sonic.zoom();











