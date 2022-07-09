require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
<<<<<<< HEAD
const cookieParser = require("cookie-parser");

const { user } = require("./routes/user");
=======
>>>>>>> f6168be (added middlewares)
const connectDB = require("./config/database_config");

// Import Routes
const authRoute = require('./routes/auth');

const app = express();

<<<<<<< HEAD
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors({ credentials: true }));
=======
// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())

//Route Middlewares
app.use('/api/user',authRoute)
>>>>>>> f6168be (added middlewares)


const PORT = process.env.PORT || 4000;

// Database connection
connectDB();

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log("Server started at port: " + PORT);
});
