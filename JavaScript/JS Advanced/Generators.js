// function normalFunction() {
//     console.log("Hello");
//     console.log("World");
// };

// normalFunction();
// normalFunction();

function* generatorFunction() {
    yield "Hello"
    yield "World"
};

const generatorObject = generatorFunction();
for (const word of generatorObject) {
    console.log(word);
};