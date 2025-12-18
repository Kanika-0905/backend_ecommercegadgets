const mongoose = require('mongoose');
const Product = require('./Modals/ProductModals');
require('dotenv').config();

const products = [
  {
    name: "iPhone 15 Pro",
    category: "Smartphones",
    price: 134900,
    stock: 10,
    description: "Latest iPhone with A17 Pro chip and advanced camera system.",
    image: "/images/iphone15pro.jpg"
  },
  {
    name: "Samsung Galaxy S24",
    category: "Smartphones",
    price: 79999,
    stock: 15,
    description: "Samsung flagship with AI features and excellent camera.",
    image: "/images/galaxys24.jpg"
  },
  {
    name: "MacBook Air M2",
    category: "Laptops",
    price: 99900,
    stock: 8,
    description: "Apple MacBook Air with M2 chip and all-day battery life.",
    image: "/images/macbookair.jpg"
  }
];

async function importProducts() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to database");
        
        const result = await Product.insertMany(products);
        console.log(`Added ${result.length} products to database`);
        
        mongoose.connection.close();
        console.log("Import completed successfully");
    } catch (error) {
        console.error("Import failed:", error.message);
        process.exit(1);
    }
}

importProducts();
