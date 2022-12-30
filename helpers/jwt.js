let jwt = require('jsonwebtoken');
const privateKey = process.env.private_key;

const generateJwt = () => {
    const token = jwt.sign({})
}