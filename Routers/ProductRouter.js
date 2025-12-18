const express = require("express");
const router = express.Router();

const {getAllProducts, addProduct, updateProduct, deleteProduct, getCategories} = require("./../Controllers/ProductController");

router.get("/categories", getCategories);
router.get("/", getAllProducts);
router.post("/", addProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;