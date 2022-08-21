const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const auth = require('./routes/auth');
const users = require('./routes/users');
const hotels = require('./routes/hotels');
const rooms = require('./routes/rooms');

const app = express();
dotenv.config();

const connect = async () => {
    try {
        mongoose.connect(process.env.MONGO_DB)
        console.log('Connected to MongoDB');
    } catch (err) {
        console.log(err);
    }
};

//Middleware
app.use(express.json());
app.use("/api/auth", auth);
app.use("/api/hotels", hotels);
app.use("/api/users", users);
app.use("/api/rooms", rooms);

app.listen(8800, () => {
    connect();
    console.log('Server is running on port 8800');
});