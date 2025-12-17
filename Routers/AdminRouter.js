const express = require("express");
const router = express.Router();

const {adminLogin, getAllUsers, updateUserRole} = require("./../Controllers/AdminController");
const {SignupUserweb, updateUser, deleteUser} = require("./../Controllers/SignUpwebController");
const {getAllProducts, addProduct, updateProduct, deleteProduct} = require("./../Controllers/ProductController");

router.post("/login", adminLogin);
router.get("/users", getAllUsers);
router.post("/users", SignupUserweb);
router.put("/users/:id", updateUser);
router.put("/users/:id/role", updateUserRole);
router.delete("/users/:id", deleteUser);
router.get("/products", getAllProducts);
router.post("/products", addProduct);
router.put("/products/:id", updateProduct);
router.delete("/products/:id", deleteProduct);

module.exports = router;