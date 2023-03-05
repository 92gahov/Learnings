const squares = document.querySelectorAll(".square");
const mole = document.querySelector(".mole");
const timeLeft = document.querySelector("#time-left");
const score = document.querySelector("#score");

let result = 0;
let hitPosition;
let currnetTime = 60;
let timeId = null;

function randomSquare() {
    squares.forEach(square => {
        square.classList.remove('mole');
    })

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');
    hitPosition = randomSquare.id;
};

squares.forEach(square => {
    square.addEventListener("mousedown", () => {
        if (square.id == hitPosition) {
            result++;
            score.textContent = result;
            hitPosition = null;
        }
    })
});

function moveMole() {
    timeId = setInterval(randomSquare, 500);
};

moveMole();

function countDown() {
    currnetTime--;
    timeLeft.textContent = currnetTime;

    if (currnetTime == 0) {
        clearInterval(countDownTimerId);
        clearInterval(timeId);
        alert("GAME OVER");
    }
};

let countDownTimerId = setInterval(countDown, 1000);