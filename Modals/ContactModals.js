const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
    name: String,
    email: String,
    query: String
});

module.exports = mongoose.model("Contact", contactSchema);