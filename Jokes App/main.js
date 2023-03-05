let joke = "";
let clickCount = 0;
let gifs = ["./img/gif_1.gif", "./img/gif_2.gif", "./img/gif_3.gif", "./img/gif_4.gif", "./img/gif_5.gif"];

function getJoke() {
    fetch("https://api.chucknorris.io/jokes/random")
        .then(res => res.json())
        .then(function (result) {
            jokes = result.value;
            document.getElementById("output").innerHTML = `<p>${jokes}</p>`;
        }),
        error => {
            console.log(error + "");
        };
};


function count() {
    clickCount++;
}



function getImg() {
    let currGif = gifs[clickCount];
    if (clickCount < 4) {
        count();
    } else {
        clickCount = -1;
        count()
    }
    fetch(currGif)
        .then(response => {
            return response.blob();
        })
        .then(blob => {
            document.getElementById("gif-output").src = URL.createObjectURL(blob);
        })
}

document.getElementById("getJokeBtn").addEventListener("click", () => {
    getJoke();
    getImg();
    document.getElementById("gif").style.display = "block";
});
