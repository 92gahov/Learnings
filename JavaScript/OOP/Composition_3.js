// function words(text) {
//     return String(text).toLowerCase().split(/\s/)
// }

// function shortUpper(words) {
//     return words.map(word => {
//         if (word.length < 5) {
//             return word.toUpperCase()
//         } else {
//             return word
//         }
//     })
// }

// function createText(array) {
//     return array.join(' ')
// }

// const text = "Hello! My name is Damien and I love Javascript. Make this exciting.";

// const allWords = words(text);
// const upperText = shortUpper(allWords);
// const newText = createText(upperText);
// console.log(newText);

/*----------------------------------------------*/

function words(text) {
    return String(text).toLowerCase().split(/\s/)
}

function shortUpper(words) {
    return words.map(word => {
        if (word.length < 5) {
            return word.toUpperCase()
        } else {
            return word
        }
    })
}

function createText(array) {
    return array.join(' ')
}

const text = "Hello! My name is Damien and I love Javascript. Make this exciting.";

const newText = createText(shortUpper(words(text)));
console.log(newText);