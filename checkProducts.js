const mongoose = require('mongoose');
const Product = require('./Modals/ProductModals');
require('dotenv').config();

async function checkProducts() {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connected to database");
        
        const products = await Product.find({});
        console.log(`Found ${products.length} products in database:`);
        
        products.forEach(product => {
            console.log(`- ${product.name} (${product.category}) - ₹${product.price}`);
        });
        
        mongoose.connection.close();
    } catch (error) {
        console.error("Check failed:", error.message);
    }
}

checkProducts();