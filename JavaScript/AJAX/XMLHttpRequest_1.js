var nodes = {
    output: document.getElementsByClassName('output')[0],
    getDataBtn: document.getElementsByClassName('getDataBtn')[0],
};

var dataURL = './lorem_1.html';

var AJAXcall = function () {
    var xhr = window.XMLHttpRequest ? new XMLHttpRequest() :
        new ActiveXObject("Microsoft.XMLHTTP");
    xhr.open("GET", dataURL, true);

    xhr.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            nodes.output.innerHTML = this.responseText;
        };
    };

    xhr.send();
};

nodes.getDataBtn.addEventListener('click', function () {
    AJAXcall();
});