var names = [];

function get() {
    names.push(document.getElementById("names").value);
    let participants = "<ul>"
    for (var part = 0; part < names.length; part++) {
        participants += "<li>" + names[part] + "</li>";
        if (names.length == 4) {
            document.getElementById("winner-or-not").innerHTML = "Честито" + " " + names[winn] + "," + " " + "Вие спечелихте 100 лева.";
            document.getElementById("winner-or-not").style.color = "black";
        } else if (names.length == 8) {
            document.getElementById("winner-or-not").innerHTML = "Честито" + " " + names[winn] + "," + " " + "Вие спечелихте 100 лева.";
            document.getElementById("winner-or-not").style.color = "black";
        } else {
            document.getElementById("winner-or-not").innerHTML = names[part] + "," + " " + "Вие не спечелихте.Опитайте отново.";
            document.getElementById("winner-or-not").style.color = "red";
        }
    }
    let winners = "<ul>";
    for (var winn = 3; winn < names.length; winn += 3 + 1) {
        winners += "<li>" + names[winn] + "</li>";
        if (names.length == 4) {
            document.getElementById("winner-or-not").innerHTML = "Честито" + " " + names[winn] + "," + " " + "Вие спечелихте 100 лева.";
            document.getElementById("winner-or-not").style.color = "black";
        } else if (names.length == 8) {
            document.getElementById("winner-or-not").innerHTML = "Честито" + " " + names[winn] + "," + " " + "Вие спечелихте 100 лева.";
            document.getElementById("winner-or-not").style.color = "black";
        }
    }
    winners += "</ul>";
    document.getElementById("winners").innerHTML = winners;
    participants += "</ul>";
    document.getElementById("participants").innerHTML = participants;

    function check() {
        if (names.length == 10) {
            document.getElementById("btn").disabled = true;
            document.getElementById("names").disabled = true;
            document.getElementById("stop-game").innerHTML = "Не може да участвате, защото играта е свършила!";
            document.getElementById("stop-game").style.color = "red";
        }
    }
    check();
    document.getElementById("names").value = "";
    document.getElementById("btn").disabled = true;
}
function bigWinner() {
    var bigWinner = names[Math.floor(Math.random() * names.length)];
    document.getElementById("big-winner").innerHTML = bigWinner;
}
document.getElementById("names").addEventListener("keydown", (e) => {
    document.getElementById("btn").disabled = false;
    if (e.key === "Enter") {
        e.preventDefault();
        get();
    }
})
