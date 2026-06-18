const express = require("express");
const router = express.Router();

const Product = require("../models/Product");
const Order = require("../models/Order");


// Add Product
router.post("/products", async (req, res) => {

    try {

        const product = new Product(req.body);

        await product.save();

        res.status(201).json({
            message: "Product Added Successfully",
            product
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});


// Get All Products
router.get("/products", async (req, res) => {

    try {

        const products = await Product.find();

        res.json(products);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});


// Search By Category
router.get("/products/category/:category", async (req, res) => {

    try {

        const products = await Product.find({
            category: req.params.category
        });

        res.json(products);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});


// Search By Max Price
router.get("/products/price/:price", async (req, res) => {

    try {

        const products = await Product.find({
            price: {
                $lte: req.params.price
            }
        });

        res.json(products);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});


// Place Order
router.post("/orders", async (req, res) => {

    try {

        const {
            productId,
            buyer,
            quantity
        } = req.body;

        const product =
            await Product.findById(productId);

        if (!product) {

            return res.status(404).json({
                message: "Product Not Found"
            });
        }

        if (product.stock < quantity) {

            return res.status(400).json({
                message: "Insufficient Stock"
            });
        }

        const total =
            product.price * quantity;

        const order = new Order({
            productId,
            buyer,
            quantity,
            total
        });

        await order.save();

        product.stock -= quantity;

        await product.save();

        res.json({
            message: "Order Placed Successfully",
            order
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});


// Track Order
router.get("/orders/:id", async (req, res) => {

    try {

        const order =
            await Order.findById(
                req.params.id
            ).populate("productId");

        if (!order) {

            return res.status(404).json({
                message: "Order Not Found"
            });
        }

        res.json(order);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;