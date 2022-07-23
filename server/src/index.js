require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/database_config");

// Import Routes
const authRoute = require('./routes/auth');
const userAccountMgmtRoute = require('./routes/userAccountMgmt');

const app = express();

const cors = require("cors");
app.use(cors());

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(cors({ credentials: true }));

//Route Middlewares
app.use('/api/user',authRoute)
app.use('/api/user/account',userAccountMgmtRoute)

const PORT = process.env.PORT || 4000;

// Database connection
connectDB();

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log("Server started at port: " + PORT);
});
