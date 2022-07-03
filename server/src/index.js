require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const { user } = require("./routes/user");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(user);

const PORT = process.env.PORT || 4000;

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("Connected to database"))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log("Server started at port: " + PORT);
});
