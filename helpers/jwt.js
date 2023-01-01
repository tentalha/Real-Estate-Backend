let jwt = require('jsonwebtoken');
const privateKey = process.env.private_key;

const generateJwt = (data) => {
    return token = jwt.sign(data, privateKey);
}

module.exports = generateJwt