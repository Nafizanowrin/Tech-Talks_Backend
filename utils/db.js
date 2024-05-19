const mongoose = require("mongoose");

// const URI = "mongodb://127.0.0.1:27017/Tech-Talks_admin";
// mongoose.connect(URI);

const URI = process.env.MONGO_URI;
    

async function connectDb() {
    try {
        await mongoose.connect(URI);
        console.log("Connection Successful to Database!");
    } catch (error) {
        console.error("Database Connection Failed");
        process.exit(0);
    }
}

module.exports = connectDb;

