const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const authController = require("./controllers/authControllers");

const app = express();

app.enable('trust proxy');
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use(bodyParser.json());
app.use(cookieParser());

app.use(authController.blackList('clearance'));

app.use('/api/v1/auth', authRoutes)

mongoose.connect(process.env.DATABASE)
    .then(() => {
        console.log("connected to the database!")
    })

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server is running on port ${port}`));