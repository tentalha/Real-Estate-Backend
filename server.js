const express = require("express");

const app = express();

function middleWare(req, res, next) {
    console.log("Middleware Ran");
    next()
}

app.get('/', middleWare, (req, res) => {
    res.send('<h1>Hello, World!</h1>')
})

app.listen(PORT = 8080, () => {
    console.log(`Server running at port ${PORT}!`);
})