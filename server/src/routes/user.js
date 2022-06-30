const express = require("express");

const { userDemo } = require("../controllers/user");

const router = express.Router();

router.route("/user").get(userDemo);

module.exports.user = router;
