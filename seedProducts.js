const mongoose = require("mongoose");
const Product = require("./Modals/ProductModals");
require("dotenv").config();

const sampleProducts = [
    {
        name: "Laptop",
        category: "Electronics",
        price: 999,
        stock: 10,
        description: "High-performance laptop",
        image: "laptop.jpg"
    },
    {
        name: "Smartphone",
        category: "Electronics", 
        price: 699,
        stock: 25,
        description: "Latest smartphone model",
        image: "phone.jpg"
    },
    {
        name: "T-Shirt",
        category: "Clothing",
        price: 29,
        stock: 50,
        description: "Cotton t-shirt",
        image: "tshirt.jpg"
    }
];

const seedProducts = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to MongoDB");
        
        await Product.deleteMany({});
        console.log("Cleared existing products");
        
        await Product.insertMany(sampleProducts);
        console.log("Products seeded successfully");
        
        process.exit(0);
    } catch (error) {
        console.error("Error seeding products:", error);
        process.exit(1);
    }
};

seedProducts();