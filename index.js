const express = require("express");
const R2XX = require("./api/R2XX");
require('dotenv').config();
const app = express();

require('./db/dbConfig'); // Importing database connection file to entry point.

app.get('/hello', (req, res) => {
    R2XX(res, 200, "User found!", { name: "Talha" })
})

app.get('/', (req, res) => {
    res.send('<h1>Hello, World!</h1>')
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}!`);
})