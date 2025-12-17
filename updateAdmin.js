const mongoose = require("mongoose");
const Admin = require("./Modals/AdminModals");
require("dotenv").config();

const updateAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB");
        
        await Admin.findOneAndUpdate(
            { email: "admin@example.com" },
            { email: "admin@yasnikaelectra.com" }
        );
        
        console.log("Admin email updated to: admin@yasnikaelectra.com");
        console.log("Password remains: admin123");
        
        process.exit(0);
    } catch (error) {
        console.error("Error:", error);
        process.exit(1);
    }
};

updateAdmin();