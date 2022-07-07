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
router.route("/logout").post(logout);
router.route("/user/me").get(isLoggedIn, getLoggedInUser);

module.exports.user = router;
