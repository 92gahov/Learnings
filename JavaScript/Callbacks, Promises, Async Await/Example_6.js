const jokeObject = {
    id: 'fNeVDI6USnb',
    joke: 'I made a playlist for hiking. It has music from Pe… Cranberries, and Eminem. I call it my Trail Mix.'
}

const postData = async (jokeObj) => {
    const response = await fetch("https://httpbin.org/post", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jokeObj)
    });
    const jsonResponse = await response.json();
    console.log(jsonResponse);
}

postData(jokeObject);