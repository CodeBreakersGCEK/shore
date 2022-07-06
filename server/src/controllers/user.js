/** @type {import("express").RequestHandler} */ //# this will import the types for interllisense
const bcrypt = require("bcryptjs");
const User = require("../models/user");

const generateToken = (res, user) => {
  const token = user.getJwtToken();

  res
    .status(200)
    .cookie("token", token, {
      httpOnly: true,
    })
    .json({ user, token });
};

exports.register = async (req, res) => {
  try {
    const { firstName, lastName, userName, email, password } = req.body;

    if (!(email && password && userName && firstName && lastName))
      res.status(400).send("Missing required fields");

    const existingUser = await User.findOne({ email });

    if (existingUser) return res.status(400).send("User already exists");

    const existingUserName = await User.findOne({ email });

    if (existingUserName) return res.status(400).send("Username already taken");

    const encryptedPassword = await bcrypt.hash(password, 10);

    //? save the user data in DB
    const user = await User.create({
      firstName,
      lastName,
      userName,
      email: email.toLowerCase(),
      password: encryptedPassword,
    });

    generateToken(res, user);
  } catch (error) {
    console.log(error);
  }
};

exports.login = async (req, res) => {
  try {
    const { userName, password } = req.body;

    if (!(userName && password))
      res.status(400).send("Missing required fields");

    const user = await User.findOne({ userName });

    if (!user) return res.status(400).send("User does not exist");

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) return res.status(400).send("Invalid password");

    generateToken(res, user);
  } catch (error) {
    console.log(error);
  }
};

exports.logout = (req, res) => {
  res
    .status(200)
    .clearCookie("token", null, {
      httpOnly: true,
    })
    .send("Logged out successfully");
};
