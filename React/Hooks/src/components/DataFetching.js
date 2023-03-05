import React, { useEffect, useState } from 'react'

function DataFetching() {

    // const [posts, setPosts] = useState([]);
    const [id, setId] = useState(1);
    const [post, setPost] = useState({});
    const [idBtn, setIdBtn] = useState(1);

    const handleClick = () => {
        setIdBtn(id);
    }

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${idBtn}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                // setPosts(data);
                setPost(data);
            })
            .catch((err) => console.log(err))
    }, [idBtn])



    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type='button' onClick={handleClick}>Fetch Post</button>
            {/* {
                posts.map(post => <li key={post.id}>{post.title}</li>)
            } */}
            <div>{post.title}</div>
        </div>
    )
}

export default DataFetching