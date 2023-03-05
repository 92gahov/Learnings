let game = function () { };
game.prototype.select = function () {
    return "I love games and sports";
}

let cricket = function () { };
cricket.prototype = Object.create(game.prototype);
cricket.prototype.select = function () {
    return "I love cricket";
}

let tennis = function () { };
tennis.prototype = Object.create(game.prototype);
tennis.prototype.select = function () {
    return "I love tennis";
}

let football = function () { };
football.prototype = Object.create(game.prototype);
let games = [new game(), new cricket(), new tennis(), new football()];

games.forEach(function (game) {
    console.log(game.select());
})