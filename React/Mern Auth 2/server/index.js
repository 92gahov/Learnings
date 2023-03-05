const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
}));

mongoose.connect(process.env.DB)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        if (err) return console.error(err);
    })

app.use("/auth", require("./routes/userRoute"));
app.use("/customer", require("./routes/customerRoute"));
