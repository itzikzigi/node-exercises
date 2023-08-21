const express = require("express");
const router = express.Router();
const { addNewUser, loginRes } = require("../userController");

router.get("/");
router.post("/sign-up", addNewUser);
router.post("/log-in", loginRes);

module.exports = router;
