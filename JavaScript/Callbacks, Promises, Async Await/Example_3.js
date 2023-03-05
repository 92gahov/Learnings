// Async/Await

const myUsers = {
    userList: []
};

const myFunction = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    // console.log(jsonUserData);
    return jsonUserData;
}

// myFunction();

const anotherFunction = async () => {
    const data = await myFunction();
    // console.log(data);
    myUsers.userList = data;
    console.log(myUsers.userList);
};

anotherFunction();
console.log(myUsers.userList);