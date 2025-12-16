const express =require("express");

const router = express.Router();

const {SignupUserweb, LoginUserweb}=require("./../Controllers/SignUpwebController");

router.post("/signup",SignupUserweb);
router.post("/login",LoginUserweb);

module.exports = router;

