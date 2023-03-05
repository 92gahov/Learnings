// 2nd parameter of fetch is a object

const getDadJoke = async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
        method: "GET",
        headers: {
            Accept: "application/json"
        }
    });
    const jsonJokeData = await response.json();
    console.log(jsonJokeData);
}

getDadJoke();