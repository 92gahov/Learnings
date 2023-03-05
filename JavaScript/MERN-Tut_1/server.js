const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(express.static('public'));

// mongoose.connect(process.env.DB_CONNECT, () => {
//     console.log("Connect to DB");
// });
mongoose.connect(process.env.DB_CONNECT)
    .then(() => {
        console.log("Connected to DB")
    })
    .then(() => {
        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    })
    .catch((err) => console.log(err));

const postSchema = mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String,
    }
});

const Post = mongoose.model("Post", postSchema);

app.get('/', (req, res) => {
    res.send("Express here")
});

app.post('/create', (req, res) => {
    // console.log(req.body)
    // if (req.body.title === "" || req.body.description === "") {
    //     return res.status(400).json({message: "Empty fields!"});
    // }
    Post.create({
        title: req.body.title,
        description: req.body.description
    })
        .then(doc => console.log(doc))
        .catch((err) => {
            console.log(err)
        })
});

app.get("/posts", (req, res) => {
    Post.find().then(items => res.json(items))
        .catch((err) => console.log(err));
});

app.delete("/delete/:id", (req, res) => {
    Post.findByIdAndDelete({ _id: req.params.id })
        // .then(doc => console.log(doc))
        .catch((err) => console.log(err));
});

app.put("/update/:id", (req, res) => {
    // console.log(req.params);
    // console.log(req.body);
    Post.findByIdAndUpdate({ _id: req.params.id }, {
        title: req.body.title,
        description: req.body.description
    })
        // .then(doc => console.log(doc))
        .catch((err) => console.log(err));
});

// app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));