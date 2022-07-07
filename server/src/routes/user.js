const express = require("express");

const {
  register,
  login,
  logout,
  getLoggedInUser,
} = require("../controllers/user");
const { isLoggedIn } = require("../middlewares/auth");

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(isLoggedIn, logout);
router.route("/profile").get(isLoggedIn, getLoggedInUser);

module.exports.user = router;
