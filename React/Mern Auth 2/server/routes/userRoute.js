const router = require("express").Router();
const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
    try {
        const { email, password, passwordVerify } = req.body;

        if (!email || !password || !passwordVerify) {
            return res.status(400).json({ errorMessage: "Please enter all fields!" });
        }

        if (password.length < 6) {
            return res.status(400).json({ errorMessage: "Please enter a password of at least 6 characters!" });
        }

        if (password !== passwordVerify) {
            return res.status(400).json({ errorMessage: "Please enter the same password twice!" });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ errorMessage: "Email already exists!" });
        }

        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password, salt);

        const newUser = new User({
            email, password: passwordHash
        })
        const savedUser = await newUser.save();

        const token = jwt.sign({
            user: savedUser._id
        }, process.env.JWT_SECRET);

        res.cookie("token", token, {
            httpOnly: true
        }).send();

    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ errorMessage: "Please enter all fields!" });
        }

        const existingUser = await User.findOne({ email });
        if (!existingUser) {
            return res.status(401).json({ errorMessage: "Wrong email or pasword!" });
        }

        const passwordCorrect = await bcrypt.compare(password, existingUser.password);
        if (!passwordCorrect) {
            return res.status(401).json({ errorMessage: "Wrong email or pasword!" });
        }

        const token = jwt.sign({
            user: existingUser._id
        }, process.env.JWT_SECRET);

        res.cookie("token", token, {
            httpOnly: true
        }).send();
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
});

router.get("/logout", (req, res) => {
    res.cookie("token", "", {
        httpOnly: true,
        expires: new Date(0)
    }).send();
});

router.get("/loggedIn", (req, res) => {
    try {
        const token = req.cookies.token;

        if (!token) {
            return res.json(false);
        }

        jwt.verify(token, process.env.JWT_SECRET);

        res.send(true);

    } catch (error) {
        console.error(error);
        res.json(false);
    }
});

module.exports = router;