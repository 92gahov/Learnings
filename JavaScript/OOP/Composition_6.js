const tapDancer = (state) => ({
    tapDance(duration) {
        console.log(`${state.name} has tap danced for ${duration} seconds`)
    }
})

const vetVistor = (state) => ({
    visitVet(status) {
        console.log(`${state.name} is here because they have a/an ${status}`);
        state.vetCount += 1;
    }
})

function Cat(name, breed, vetCount) {
    let cat = {name, breed, vetCount};
    return Object.assign(cat, tapDancer(cat), vetVistor(cat))
}

function Unicorn(name, location) {
    let unicorn = {name, location};
    return Object.assign(unicorn, tapDancer(unicorn))
}

const tibbers = Cat("Tibbers", "tuxedo", 3);
const edward = Unicorn("Ed", "England");

tibbers.visitVet("upset stomach");
edward.tapDance(1341);