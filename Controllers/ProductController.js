const Product = require("./../Modals/ProductModals.js");
const mongoose = require("mongoose");

const getAllProducts = async(req, res) => {
    try{
        const products = await Product.find({});
        
        res.status(200).json({
            message: "Products retrieved successfully",
            products: products
        });
    }
    catch(error){
        res.status(500).json({
            message: "Error retrieving products",
            error: error.message
        });
    }
};

const addProduct = async(req, res) => {
    try{
        const{name, category, price, stock, description, image} = req.body;

        const newProduct = new Product({
            name,
            category,
            price,
            stock,
            description,
            image
        });
        const savedProduct = await newProduct.save();

        res.status(201).json({
            message: "Product added successfully",
            data: savedProduct
        });
    }
    catch(error){
        res.status(500).json({
            message: "Error adding product",
            error: error.message
        });
    }
};

const updateProduct = async(req, res) => {
    try{
        const {id} = req.params;
        
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                message: "Invalid product ID format"
            });
        }
        
        const updatedProduct = await Product.findByIdAndUpdate(id, req.body, {new: true});
        
        if(!updatedProduct){
            return res.status(404).json({
                message: "Product not found"
            });
        }
        
        res.status(200).json({
            message: "Product updated successfully",
            data: updatedProduct
        });
    }
    catch(error){
        res.status(500).json({
            message: "Error updating product",
            error: error.message
        });
    }
};

const deleteProduct = async(req, res) => {
    try{
        const {id} = req.params;
        
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({
                message: "Invalid product ID format"
            });
        }
        
        const deletedProduct = await Product.findByIdAndDelete(id);
        
        if(!deletedProduct){
            return res.status(404).json({
                message: "Product not found"
            });
        }
        
        res.status(200).json({
            message: "Product deleted successfully",
            data: deletedProduct
        });
    }
    catch(error){
        res.status(500).json({
            message: "Error deleting product",
            error: error.message
        });
    }
};

const getCategories = async(req, res) => {
    try{
        const categories = await Product.distinct('category');
        
        res.status(200).json({
            message: "Categories retrieved successfully",
            categories: categories
        });
    }
    catch(error){
        res.status(500).json({
            message: "Error retrieving categories",
            error: error.message
        });
    }
};

module.exports = {
    getAllProducts,
    addProduct,
    updateProduct,
    deleteProduct,
    getCategories
};