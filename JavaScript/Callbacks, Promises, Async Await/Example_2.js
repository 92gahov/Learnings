// Promises
// 3 states: Pending, Fulfild, Rejected

// const myPromise = new Promise((resolve, reject) => {
//     const error = false;
//     if (!error) {
//         resolve("Yes, resolve the promise");
//     } else {
//         reject("No, rejected the promise");
//     }
// });

// console.log(myPromise);

// myPromise
//     .then(value => {
//         // console.log(value)
//         return value + 1;
//     })
//     .then(newValue => {
//         console.log(newValue);
//     })
//     .catch(err => {
//         console.error(err);
//     })

// const myNextPromise = new Promise((resolve, reject) => {
//     setTimeout(function () {
//         resolve("myNextPromise resolved.");
//     }, 3000)
// });

// myNextPromise.then(value => {
//     console.log(value);
// });

// myPromise.then(value => {
//     console.log(value);
// });

// Fetch API

// const users = fetch("https://jsonplaceholder.typicode.com/users");

// pending

// console.log(users);

const users = fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        // console.log(response);
        return response.json();
    })
    .then(data => {
        // console.log(data);
        data.forEach(user => {
            console.log(user);
        });
    });

    console.log(users);
    console.log("Hello");



