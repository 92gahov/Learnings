var nodes = {
    output: document.getElementsByClassName("output")[0],
    getDataBtn: document.getElementsByClassName("getDataBtn")[0]
};

var dataURL = "./lorem_3";

var AJAXcall = function (callback, ...args) {
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("Microsoft.XMLHTTP");

    xhr.open("GET", dataURL);

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            callback(this.responseText, args[0]);
        }
    };

    xhr.send();
};

function render(data, node) {
    node.innnerHTML = data;
};

nodes.getDataBtn.addEventListener("click", function () {
    fetch(dataURL)
        .then(r => {
            console.log(r.status);
        })
        .then(data => render(data))
        .catch(err => console.log(`Error catch: ${err}`))
});