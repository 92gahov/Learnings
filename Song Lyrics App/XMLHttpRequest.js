var outputLyric = document.getElementById("outputLyric");
var outputVideo = document.getElementById("outputVideo");

// function AjaxCallLyric(lyric) {
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", lyric, true);
//     xhr.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             outputLyric.innerHTML = this.responseText;
//         }
//     }
//     xhr.send();
// };

// function AjaxCallVideo(video) {
//     let xhr = new XMLHttpRequest();
//     xhr.open("GET", video, true);
//     xhr.responseType = "blob";
//     xhr.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             outputVideo.src = URL.createObjectURL(this.response);
//         }
//     }
//     outputVideo.style.display = "block";

//     xhr.send();
// };




var head = document.getElementById("head");

// head.addEventListener("click", function (e) {
//     let img = e.target;
//     let imgName = img.dataset.name;
//     let xhrLyric = new XMLHttpRequest();
//     let xhrVideo = new XMLHttpRequest();
//     let dataLyric = `./lyrics/${imgName}.txt`;
//     let dataVideo = `./videos/${imgName}.mp4`;
//     xhrLyric.open("GET", dataLyric, true);
//     xhrVideo.open("GET", dataVideo, true);
//     xhrVideo.responseType = "blob";
//     xhrLyric.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             outputLyric.innerHTML = this.responseText;
//         }
//     }
//     xhrVideo.onreadystatechange = function () {
//         if (this.readyState == 4 && this.status == 200) {
//             outputVideo.src = URL.createObjectURL(this.response);
//         }
//     }
//     outputVideo.style.display = "block";
//     xhrLyric.send();
//     xhrVideo.send();
// });

// head.addEventListener("click", function (e) {
//     let img = e.target;
//     let imgName = img.dataset.name;
//     let dataLyric = `./lyrics/${imgName}.txt`;
//     let dataVideo = `./videos/${imgName}.mp4`;
//     fetch(dataLyric)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("HTTP error " + response.status);
//             }
//             return response.text()
//         })
//         .then(text => {
//             outputLyric.innerHTML = text;
//         });


//     fetch(dataVideo)
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error("HTTP error " + response.status);
//             }
//             return response.blob();
//         }
//         )
//         .then(blob => {
//             outputVideo.src = URL.createObjectURL(blob);
//         })
//     outputVideo.style.display = "block";
// });


head.addEventListener("click", function (e) {
    let img = e.target;
    let imgName = img.dataset.name;
    let dataLyric = `./lyrics/${imgName}.txt`;
    let dataVideo = `./videos/${imgName}.mp4`;
    fetch(dataLyric)
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.text()
        })
        .then(text => {
            let lines = text.split(/\r\n|\n/);
            let newLine = lines.join('\n');
            outputLyric.innerText = newLine;
        });


    fetch(dataVideo)
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.blob();
        }
        )
        .then(blob => {
            outputVideo.src = URL.createObjectURL(blob);
        })
    outputVideo.style.display = "block";
});










