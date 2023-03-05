let string = "Bye";
console.log("Start", string);

////////////////////////////////////////////////////

{
    let string = "Hi there";
    console.log("Inside block 1", string);
}

/////////////////////////////////////////////////////

{
    let string = "Hello World";
    console.log("Inside block 2", string);
}

///////////////////////////////////////////////////

console.log("End", string);

//////////////////////////////////////////////////

(function () {
    console.log("Such a hurry");
})();

/////////////////////////////////////////////////

function mathcer(mainString, matchString) {
    console.log(mainString.match(matchString));
};

(function () { mathcer("My name is", "name") })();