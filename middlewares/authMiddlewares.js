const R4XX = require("../api/R4XX");
const User = require("../models/userModel");

const userAlreadyExists = (req, res, next) => {
    const { email } = req.body;
    const user = User.findOne({ email });
    if (!user) {
        next();
    }
    else {
        R4XX(res, 400, `User with email "${email}" already exists.`)
    }
}

module.exports = { userAlreadyExists }