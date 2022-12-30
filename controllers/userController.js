const R2XX = require("../api/R2XX");
const R4XX = require("../api/R4XX");
const User = require("../models/userModel")

const login_user = (req, res) => {
    try {

    } catch (error) {

    }
}

const register_user = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (name && email && password) {
            const newUser = new User({ name, email, password });
            await newUser.save();
            R2XX(res, 201, "registered successfully", { name, email })
        }
        else {
            R4XX(res, 400, "Some required values in payload are missing")
        }
    } catch (error) {
        console.log(error);
        R4XX(res, 500, "Server Error");
    }
}


module.exports = { login_user, register_user }