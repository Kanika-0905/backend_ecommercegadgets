const mongoose = require("mongoose");
const Admin = require("./Modals/AdminModals");
require("dotenv").config();

const checkAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB");
        
        const admins = await Admin.find({});
        console.log("All admins in database:", admins);
        
        const specificAdmin = await Admin.findOne({ email: "admin@example.com" });
        console.log("Admin with email admin@example.com:", specificAdmin);
        
        process.exit(0);
    } catch (error) {
        console.error("Error:", error);
        process.exit(1);
    }
};

checkAdmin();