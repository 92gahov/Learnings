import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreatePost = () => {

    const [post, setPost] = useState({
        title: "",
        description: ""
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    };

    const handleClick = (e) => {
        e.preventDefault();
        if (post.title === "" || post.description === "") {
            alert("Empty fileds!");
            return false;
        } else {
            axios.post("/create", post)
                .then((res) => console.log(res))
                .then((err) => console.log(err));
            navigate("posts");
        }
        // axios.post("/create", post)
        // .then((res) => console.log(res))
        // .catch((err) => console.log(err));
        // navigate("posts");
    }

    return (
        <div style={{ width: "90%", margin: "auto auto", textAlign: "center" }}>
            <h1>Create Post</h1>
            <Form>
                <Form.Group>
                    <Form.Control
                        name="title"
                        placeholder='Title'
                        value={post.title}
                        onChange={handleChange}
                        style={{ marginBottom: "1rem" }} />
                    <Form.Control
                        name="description"
                        placeholder='Description'
                        value={post.description}
                        onChange={handleChange}
                        style={{ marginBottom: "1rem" }} />
                </Form.Group>
                <Button
                    variant='outline-success'
                    style={{ width: "100%", marginBottom: "1rem" }}
                    onClick={handleClick}>CREATE POST</Button>
            </Form>
            <Button
                variant='outline-dark'
                style={{ width: "100%" }}
                onClick={() => navigate(-1)}>BACK</Button>
        </div>
    )
};

export default CreatePost;