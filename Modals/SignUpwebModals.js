const mongoose = require("mongoose");

const signupschema = new mongoose.Schema({
    name : String,
    email : String,
    phone : Number,
    password : String,
    confirmPassword : String,
    role: { type: String, enum: ['customer', 'admin'], default: 'customer' }
})

module.exports=mongoose.model("User",signupschema);
