const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("../schemas/user");
const { promisify } = require("util");
const JWT_SECRET = process.env.JWT_SECRET;
const NODE_ENV = process.env.NODE_ENV;
const DBError = require('../utils/DBError');

const signJwt = (id) => {
    return jwt.sign({ id }, JWT_SECRET, {
        expiresIn: '14d'
    })
}

const sendToken = (user, statusCode, req, res) => {
    const token = signJwt(user._id);
    const options = {
        maxAge: new Date().getDate() + 14 * 1000 * 60 * 60 * 24,
        secure: NODE_ENV === 'production' ? true : false,
        httpOnly: NODE_ENV === 'production' ? true : false
    }
    res.cookie('jwt', token, options);
    // res.cookie('user', user.email);
    user.password = undefined;
    res.status(statusCode).json({
        status: 'success',
        token,
        user,
    })
}

const encryptPw = async (password) => {
    return await bcrypt.hash(password, 12)
}

exports.signup = async (req, res) => {
    const { email, password } = req.body;
    const pw = await encryptPw(password);
    try {
        const newUser = await User.create({
            email, password: pw
        })
        console.log(newUser)
        sendToken(newUser, 201, req, res);
    } catch (error) {
        console.log(error.name);
        let errorHandled = error;
        if (error.name === 'MongoServerError') {
            errorHandled = DBError(error)
        }
        res.status(401).json({ message: errorHandled.message })
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;
    console.log("login")
    try {
        const user = await User.findOne({ email }).select('+password');
        const compare = await bcrypt.compare(password, user.password);
        compare ? sendToken(user, 200, req, res)
            : res.status(400).json({ message: "Login failed!" });
        // await bcrypt.compare(password, user.password);
        // sendToken(user, 200, req, res);
    } catch (error) {
        console.log(error);
        res.status(400).json({ message: error.message });
    }
};

exports.logout = async (req, res) => {
    const options = {
        maxAge: new Date().getDate() + 10000,
        secure: NODE_ENV === 'production' ? true : false,
        httpOnly: NODE_ENV === 'production' ? true : false
    }
    res.cookie('jwt', 'expiredtoken', options);
    res.status(200).json({ status: 'success' });
};

const decryptJwt = async (token) => {
    const jwtVerify = promisify(jwt.verify);
    return await jwtVerify(token, JWT_SECRET);
};

exports.secretContent = async (req, res) => {
    console.log('REQ USER');
    console.log(req.user);
    res.status(200).json({ status: 'Secret content!' });
};

exports.secure = async (req, res, next) => {
    let token;
    if (req.cookies) {
        token = req.cookies.jwt;
    }
    if (!token || token === 'expiredtoken') {
        return res.status(401).json({
            status: 'unauthorized',
            message: 'You are not authorized!'
        })
    }
    const jwtInfo = await decryptJwt(token);
    console.log(jwtInfo);
    const user = await User.findById(jwtInfo.id);
    if (!user) {
        return res.status(401).json({
            status: 'unauthorized',
            message: 'You are not authorized!'
        })
    }
    req.user = user;
    next();
};

exports.clearanceLevel = (...clearanceLevel) => {
    return (req, res, next) => {
        clearanceLevel.includes(req.user.clearance)
            ? next()
            : res.status(401).json({
                status: 'unauthorized',
                message: 'Content not available for you!'
            })
    }
};

exports.blackList = (...inputs) => {
    return (req, res, next) => {
        const { body } = req;
        console.log(body);
        let bodyProps;
        for (let prop in inputs) {
            bodyProps = inputs[prop];
            if (body[bodyProps]) {
                delete body[bodyProps];
            }
        }
        console.log(req.body);
        next();
    }
};