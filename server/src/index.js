const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const { user } = require("./routes/user");

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(user);

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(PORT, () => {
  console.log("Server started!!! at port: " + PORT);
});
