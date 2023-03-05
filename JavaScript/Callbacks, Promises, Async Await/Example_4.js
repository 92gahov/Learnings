// workflow function

const getAllUserEmail = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const jsonUserData = await response.json();
    const userEmailArray = jsonUserData.map(user => {
        return user.email;
    })
    console.log(userEmailArray);
    postToWebPage(userEmailArray);
}

// getAllUserEmail();

const postToWebPage = (data) => {
    console.log(data);
}

getAllUserEmail();