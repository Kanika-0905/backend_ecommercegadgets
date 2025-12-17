const express = require("express");
const router = express.Router();

const {getAllProducts, addProduct, updateProduct, deleteProduct} = require("./../Controllers/ProductController");

router.get("/", getAllProducts);

module.exports = router;