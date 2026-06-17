const express = require('express');
const router = express.Router();
const Product = require("../model/Product");
const Order = require("../models/Order");

router.post("/products", async(req, res)=>{
    try{
        const product = await Product.create(req.body);
        res.json(product);
    }
    catch(error)
    {
        
    }
})
router.get('/', (req, res) => {
    res.send('Orders Route');
});
module.exports = router;