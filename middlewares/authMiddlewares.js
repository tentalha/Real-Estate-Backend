const R4XX = require("../api/R4XX");
const User = require("../models/userModel");

const userAlreadyExists = async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            next();
        }
        else {
            return R4XX(res, 400, "EMAIL-EXISTS", `User with email "${email}" already exists.`)
        }
    } catch (error) {
        return R4XX(res, 500, "SERVER-ERROR", "Internal Server Error!")
    }

}


const userNotExist = async (req, res, next) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (user) {
            next();
        }
        else {
            return R4XX(res, 401, "EMAIL-NOTEXISTS", `Authentication Error`)
        }
    } catch (error) {
        return R4XX(res, 500,"SERVER-ERROR", "Internal Server Error!")
    }

}
module.exports = { userAlreadyExists, userNotExist }