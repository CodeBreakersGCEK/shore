const express = require("express");

const { register, login } = require("../controllers/user");

const router = express.Router();

router.route("/register").post(register);
router.route("/login").post(login);
// router.route("/logout").post(logout);

module.exports.user = router;
