require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");

const { user } = require("./routes/user");
const connectDB = require("./config/database_config");
const app = express();

app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));

app.use(user);

const PORT = process.env.PORT || 4000;

// Database connection
connectDB();

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log("Server started at port: " + PORT);
});
