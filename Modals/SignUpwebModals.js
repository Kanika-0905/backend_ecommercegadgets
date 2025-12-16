const mongoose = require("mongoose");

const signupschema = new mongoose.Schema({
    name : String,
    email : String,
    phone : Number,
    password : String,
    confirmPassword : String
})

module.exports=mongoose.model("User",signupschema);
