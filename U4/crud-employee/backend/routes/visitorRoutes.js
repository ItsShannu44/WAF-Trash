const express = require("express");
const router = express.Router();

const Visitor = require("../models/Visitor");


// Add Visitor
router.post("/add", async (req, res) => {
    try {

        const { name, category, phone, purpose } = req.body;

        if (phone.length !== 10) {
            return res.status(400).json({
                message: "Phone number must be 10 digits"
            });
        }

        const visitor = new Visitor({
            name,
            category,
            phone,
            purpose
        });

        await visitor.save();

        res.status(201).json({
            message: "Visitor Registered Successfully",
            visitor
        });

    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});


// Get All Visitors
router.get("/", async (req, res) => {

    try {

        const visitors = await Visitor.find()
            .sort({ entryTime: -1 });

        res.json(visitors);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});


// Search By Name
router.get("/search/name/:name", async (req, res) => {

    try {

        const visitors = await Visitor.find({
            name: {
                $regex: req.params.name,
                $options: "i"
            }
        });

        res.json(visitors);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});


// Search By Category
router.get("/search/category/:category", async (req, res) => {

    try {

        const visitors = await Visitor.find({
            category: req.params.category
        });

        res.json(visitors);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});


// Update Exit Time
router.put("/exit/:id", async (req, res) => {

    try {

        const visitor = await Visitor.findByIdAndUpdate(
            req.params.id,
            {
                exitTime: new Date()
            },
            {
                new: true
            }
        );

        res.json({
            message: "Visitor Exited Successfully",
            visitor
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;