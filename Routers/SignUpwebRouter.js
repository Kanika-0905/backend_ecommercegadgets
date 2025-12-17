const express =require("express");

const router = express.Router();

const {SignupUserweb, LoginUserweb, getAllUsers, updateUser, deleteUser}=require("./../Controllers/SignUpwebController");

router.post("/signup",SignupUserweb);
router.post("/login",LoginUserweb);
router.get("/all",getAllUsers);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;

