const express = require("express");

const { userDemo, register, login } = require("../controllers/user");

const router = express.Router();

router.route("/user").get(userDemo);
router.route("/register").post(register);
router.route("/login").post(login);
// router.route("/logout").get(logout);

module.exports.user = router;
