// var colorsOne = ["blue", "black", "white"];
// var colorsTwo = ["red", "green", "pink"];
// var allColors = [...colorsOne, ...colorsTwo];
// console.log(allColors);


// var day = {
//     breakfast: "toast with milk",
//     lunch: "rice with chicker"
// }
// var night = {
//     dinner: "noodle soup"
// }
// var all = {...day, ...night};
// console.log(all);


var colors = ["blue", "black", "white"];
var [first, ...rest] = colors;
console.log(first);
console.log(rest);