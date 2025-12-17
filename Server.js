const express = require("express");
const cors = require("cors");
const mongoose= require("mongoose");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());

const userRoutes = require("./Routers/SignUpwebRouter");
const contactRoutes = require("./Routers/ContactRouter");
const adminRoutes = require("./Routers/AdminRouter");
const productRoutes = require("./Routers/ProductRouter");
app.use("/api/user",userRoutes)
app.use("/api",contactRoutes)
app.use("/api/admin",adminRoutes)
app.use("/api/products",productRoutes)

mongoose
.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("MongoDB connected Successfully");
})
.catch((err)=>{
console.log("MongoDB Connection Failed", err);
});

app.listen(5050,()=>{
    console.log("Server is running on port 5050");
});
