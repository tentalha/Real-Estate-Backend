const mongoose = require('mongoose');

const uri = process.env.DATABASE_URL; //Getting uri form .env file

try {
    mongoose.connect(uri, { useNewUrlParser: true });
} catch (error) {
    console.log("Error connecting to database.");
}