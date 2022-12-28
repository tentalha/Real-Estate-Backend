const express = require("express");
require('dotenv').config();
const app = express();

require('./db/dbConfig'); // Importing database connection file to entry point.

app.get('/hello', (req, res) => {
    res.send('<h1>Hello, World!</h1>')
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
    console.log(`Server running at port ${PORT}!`);
})