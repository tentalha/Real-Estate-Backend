const bcrypt = require('bcryptjs');
const R2XX = require("../api/R2XX");
const R4XX = require("../api/R4XX");
const generateJwt = require('../helpers/jwt');
const User = require("../models/userModel")

const login_user = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (email && password) {
            const user = await User.findOne({ email });
            const isAuthenticated = bcrypt.compareSync(password, user.password);
            if (isAuthenticated) {
                const jwt = generateJwt({ sub: user._id })
                R2XX(res, 200, "Successfully Authenticated!", { token: jwt });
            }
            else {
                R4XX(res, 401, "PASSWORD-ERROR", "Authentication Error")
            }
        }
        else {
            R4XX(res, 400, "VALIDATION-ERROR", "Some required values in payload are missing");
        }
    } catch (error) {
        return R4XX(res, 500, "SERVER-ERROR");
    }
}

const register_user = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (name && email && password) {
            const salt = bcrypt.genSaltSync(10); //Kind of security level of hashed password
            const hashedPassword = bcrypt.hashSync(password, salt); //Hashing password and storing hashed password in DB.
            const newUser = new User({ name, email, password: hashedPassword });
            await newUser.save();
            const jwt = generateJwt({ sub: newUser._id }) //Sending the _id of the user in jwt token.
            R2XX(res, 201, "registered successfully", { token: jwt })
        }
        else {
            R4XX(res, 400, "VALIDATION-ERROR", "Some required values in payload are missing")
        }
    } catch (error) {
        console.log(error);
        R4XX(res, 500, "SERVER-ERROR", "Internal Server Error");
    }
}


module.exports = { login_user, register_user }