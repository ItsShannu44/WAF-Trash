const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const orderRoutes = require("./routes/orderRoutes");
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/productdb")
    .then(()=>console.log("MongoDB Connected"))
    .catch((error) =>console.log(error));

app.use("/", orderRoutes); 

app.listen( 5000, () => {console.log("Server Running on PORT 5000")})
