const mongoose = require("mongoose");
const Admin = require("./Modals/AdminModals");
require("dotenv").config();

const createAdmin = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB");
        
        const adminData = {
            username: "admin",
            email: "admin@example.com",
            password: "admin123",
            role: "admin"
        };
        
        const existingAdmin = await Admin.findOne({ email: adminData.email });
        if (existingAdmin) {
            console.log("Admin already exists");
            process.exit(0);
        }
        
        const admin = new Admin(adminData);
        await admin.save();
        
        console.log("Admin created successfully:");
        console.log("Email: admin@example.com");
        console.log("Password: admin123");
        
        process.exit(0);
    } catch (error) {
        console.error("Error creating admin:", error);
        process.exit(1);
    }
};

createAdmin();