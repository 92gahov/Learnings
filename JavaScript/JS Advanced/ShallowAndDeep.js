let x = 2;
let y = x;
y += 1;
console.log(y);
console.log(x);

////////////////////////////////////////////////

let xArray = [1, 2, 3];
let yArray = xArray;
yArray.push(4);
console.log(yArray);
console.log(xArray);

/////////////////////////////////////////////////////

// Mutable vs Immutable

// Primitives are immutable
let myName = "Georgi";
myName[0] = "W"; // nope!
console.log(myName);

// Reassignment is not the same as mutable
myName = "Gahov";
console.log(myName);

// Structures contain mutable data
yArray[0] = 9;
console.log(yArray);
console.log(xArray)

////////////////////////////////////////////////

// Pure Function require you to avoid mutating the data

// Impure function that mutates the data
const addToScoreHistory = (array, score) => {
    array.push(score);
    return array;
};

scoreArray = [44, 23, 12];
console.log(addToScoreHistory(scoreArray, 14));

///////////////////////////////////////////////

// Shallow Copy vs Deep Copy (clones)

// Shallow Copy

// With spread operator
const zArray = [...yArray, 10];
console.log(zArray);
console.log(yArray);

console.log(xArray === yArray);
console.log(yArray === zArray);

// With Object.assign()
const tArray = Object.assign([], zArray);
console.log(tArray);
console.log(tArray === zArray);
tArray.push(11);
console.log(zArray);
console.log(tArray);

// But if there are nested arrays or objects...
yArray.push([8, 9, 10]);
const vArray = [...yArray];
console.log(vArray);
vArray[4].push(5);
console.log(vArray);
console.log(yArray);
// nested structural data types still share a reference!

// Note: Array.from() and slice() create shallow copies too.


////////////////////////////////////////////////////

// When it comes to objects, what about...Object.freeze() ??

const scoreObj = {
    "first": 44,
    "second": 12,
    "third": { "a": 1, "b": 2 }
};

Object.freeze(scoreObj);
scoreObj.third.a = 8;
console.log(scoreObj);
// still mutates - it is a shallow freeze

//////////////////////////////////////////////////

// Deep copy is needed to avoid this
const newScoreObj = JSON.parse(JSON.stringify(scoreObj));
console.log(newScoreObj);
console.log(newScoreObj === scoreObj);

const deepClone = (obj) => {
    if (typeof obj !== "object" || obj === null) return obj;

    // Create an array or object to hold the values
    const newObject = Array.isArray(obj) ? [] : {};

    for (let key in obj) {
        const value = obj[key];
        // recursive call for nested objects and arrays
        newObject[key] = deepClone(value);
    }
    return newObject;
};

const newScoreArray = deepClone(scoreArray);
console.log(newScoreArray);
console.log(newScoreArray === scoreArray);

const myScoreObj = deepClone(scoreObj);
console.log(myScoreObj);
console.log(myScoreObj === scoreObj);

/////////////////////////////////////////////////

// Now we can make a pure function
const pureAddToScoreHistory = (array, score, cloneFunc) => {
    const newArray = cloneFunc(array);
    newArray.push(score);
    return newArray;
};

const pureScoreHistory = pureAddToScoreHistory(scoreArray, 18, deepClone);
console.log(pureScoreHistory);
console.log(scoreArray);