const express = require("express");
const cors = require("cors");
const mongoose= require("mongoose");
require("dotenv").config();
const app = express();
app.use(express.json());
app.use(cors());

const userRoutes = require("./Routers/SignUpwebRouter");
const contactRoutes = require("./Routers/ContactRouter");
app.use("/api/user",userRoutes)
app.use("/api",contactRoutes)

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
