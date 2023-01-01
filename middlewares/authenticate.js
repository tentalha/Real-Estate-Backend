const jwt = require('jsonwebtoken');
const R4XX = require('../api/R4XX');
const privateKey = process.env.private_key;

const jwtVerify = (req, res, next) => {
    const token = req.header('auth-token');
    if (!token) {
        return R4XX(res, 401, "AUTHENTICATION-ERROR", "User is not authorized!");
    }
    try {
        const user = jwt.verify(token, privateKey);
        req.user = user.sub;
        console.log(req.user);
        next();
    } catch (error) {
        R4XX(res, 401, "AUTHENTICATION-ERROR", "User is not authorized!");
    }
}

module.exports = jwtVerify;