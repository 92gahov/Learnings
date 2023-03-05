// class Character {
//     constructor(name) {
//         this.name = name;
//         this.health = 100;
//     }
// }

// class Fighter extends Character {
//     constructor(name) {
//         super(name);
//         this.stamina = 100;
//     }
//     fight() {
//         console.log(`${this.name} takes a mighty swing`);
//         this.stamina--;
//     }
// }

// class Mage extends Character {
//     constructor(name) {
//         super(name);
//         this.mana = 100;
//     }
//     cast() {
//         console.log(`${this.name} casts a fireball`)
//         this.mana--;
//     }
// }

// zapper = new Mage("Zapper");
// thumper = new Fighter("Thumper");

// zapper.cast();
// console.log(zapper.mana);
// thumper.fight();
// console.log(thumper.stamina);

/*--------------------------------------*/

const canCast = (state) => ({
    cast: (spell) => {
        console.log(`${state.name} casts ${spell}`);
        state.mana--;
    }
})

const canFight = (state) => ({
    fight: () => {
        console.log(`${state.name} slashes at the foe`);
        state.stamina--;
    }
})

const fighter = (name) => {
    let state = {
        name,
        health: 100,
        stamina: 100
    }
    return Object.assign(state, canFight(state))
}

const mage = (name) => {
    let state = {
        name, 
        health: 100,
        mana: 100
    }
    return Object.assign(state, canCast(state))
}

scorcher = mage("Scorher");
scorcher.cast("fireball");
console.log(scorcher.mana);

slasher = fighter("Slasher");
slasher.fight();
console.log(slasher.stamina);

const paladin = (name) => {
    let state = {
        name,
        health: 100,
        mana: 100,
        stamina: 100
    }
    return Object.assign(state, canCast(state), canFight(state))
}

roland = paladin("Roland");
roland.fight();
roland.cast("Holy Light");