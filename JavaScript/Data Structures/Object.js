// const obj = {
//     name: "John",
//     age: 20,
//     "key-three": true,
//     sayMyName: function() {
//         console.log(this.name);
//     }
// };

// obj.hobby = "footbal";
// delete obj.hobby;

// console.log(obj.name);
// console.log(obj["age"]);
// console.log(obj["key-three"]);
// console.log(obj);
// obj.sayMyName();

const obj = {
    name: "John",
    age: 20,
    key: false
};

console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(Object.entries(obj));

for (const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`)
};