var shooting = document.getElementById("shoot");

function startGame() {
    document.querySelector(".main_start").style.display = "none";
    document.querySelector(".countdown_main").style.display = "block";
    document.querySelector(".main_game").style.display = "block";
    setTimeout(() => {
        document.getElementById("main_countdown").innerHTML = "3";
    }, 1000);
    setTimeout(() => {
        document.getElementById("main_countdown").innerHTML = "2";
    }, 2000);
    setTimeout(() => {
        document.getElementById("main_countdown").innerHTML = "1";
    }, 3000);
    setTimeout(() => {
        document.getElementById("main_countdown").innerHTML = "START !";
    }, 4000);
    setTimeout(() => {
        document.querySelector(".countdown_main").style.display = "none";
        document.querySelector(".minutes").innerHTML = "00";
        document.querySelector(".seconds").innerHTML = "59";
        countDown();
        document.querySelector(".game_field").appendChild(circleTarget);
    }, 5000);
};

//---------------------------------------------------------------------------------

function countDown() {
    let countdown = 59;
    let counting = setInterval(function () {
        countdown--;
        document.querySelector(".seconds").innerHTML = countdown;
        if (countdown < 10) {
            document.querySelector(".seconds").innerHTML = "0" + countdown;
        }
        if (countdown <= 0) {
            clearInterval(counting);
            document.querySelector(".main_game").style.display = "none";
            document.querySelector(".end_game").style.display = "block";
        }
    }, 1000)
};

//------------------------------------------------------------------------

document.querySelector(".game_field").addEventListener("mousedown", () => {
    shooting.play();
});

document.querySelector(".game_field").addEventListener("mouseup", () => {
    setTimeout(() => {
        shooting.pause();
        shooting.currentTime = 0;
    }, 150)
});

//--------------------------------------------------------------------------

var circleTarget = document.createElement('div');
circleTarget.setAttribute("id", "circle_target");
var scores = 0;

circleTarget.addEventListener("click", () => {
    scores += 1;
    document.getElementById("scores").innerHTML = scores;
    document.getElementById("final_scores").innerHTML = scores;
    document.querySelector(".game_field").removeChild(circleTarget);
    setTimeout(() => {
        document.querySelector(".game_field").appendChild(circleTarget);
        circleTarget.style.top = Math.floor((Math.random() * 460) + 1) + "px";
        circleTarget.style.left = Math.floor((Math.random() * 1200) + 1) + "px";
    }, 1200);
});

let showHideTarget = setInterval(function () {
    document.querySelector(".game_field").appendChild(circleTarget);
    circleTarget.style.top = Math.floor((Math.random() * 460) + 1) + "px";
    circleTarget.style.left = Math.floor((Math.random() * 1200) + 1) + "px";
    setTimeout(() => {
        document.querySelector(".game_field").removeChild(circleTarget);
    }, 1200);
}, 1600);

//---------------------------------------------------------------------

function stopGame() {
    document.querySelector(".main_start").style.display = "none";
    document.querySelector(".main_game").style.display = "none";
    document.querySelector(".countdown_main").style.display = "none";
    document.querySelector(".end_game").style.display = "block";
};

function newGame() {
    location.reload();
}














