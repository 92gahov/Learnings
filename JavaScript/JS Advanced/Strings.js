const str = "hi hithere hitherethere hitheretherethere";

console.log(str.match("hi"));
console.log(str.match(/hi(there)+/g));
console.log(str.matchAll(/hi(there)+/g));

for (const match of str.matchAll(/hi(there)+/g)) console.log(match);

let number = 1_000_000_000;
console.log(number);