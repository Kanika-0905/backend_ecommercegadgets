const express =require("express");

const router = express.Router();

const {signupUser}=require("./../Controllers/signupController");

router.post("/signup",signupUser);

module.exports = router;

