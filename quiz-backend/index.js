const express = require('express');
const dotenv = require("dotenv");
const cors = require("cors");
const mdb = require("mongoose");

const signupController = require("./controllers/Signup");
const loginController = require("./controllers/Login");
const questionController = require("./controllers/questionController");

const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 8000;

// MongoDB Connection
mdb.connect(process.env.MONGO_URL).then(() => {
    console.log("MongoDB Connection Successful");
}).catch((err) => {
    console.log("MongoDB Connection Unsuccessful", err);
});

// Test route
app.get('/', (req, res) => {
    res.send("Welcome to June Session of Backend Server");
});

// Auth Routes (Keep as is)
app.use('/', signupController);
app.use('/', loginController);

// Quiz/Question Routes (NEW)
app.use('/', questionController);

// Start Server
app.listen(PORT, () => {
    console.log(`Server is running successfully on port ${PORT}`);
});
