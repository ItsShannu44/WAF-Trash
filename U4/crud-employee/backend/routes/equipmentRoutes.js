const express = require("express");
const router = express.Router();

const Equipment = require("../models/Equipment");
const Transaction = require("../models/Transaction");


// Add Equipment
router.post("/add", async (req, res) => {

    try {

        const equipment = new Equipment({
            name: req.body.name,
            category: req.body.category,
            quantity: req.body.quantity,
            available: req.body.quantity
        });

        await equipment.save();

        res.status(201).json({
            message: "Equipment Added Successfully",
            equipment
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});


// Get All Equipment
router.get("/", async (req, res) => {

    try {

        const equipment = await Equipment.find();

        res.json(equipment);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});


// Borrow Equipment
router.post("/borrow", async (req, res) => {

    try {

        const { equipmentId, borrowerName } = req.body;

        const equipment = await Equipment.findById(
            equipmentId
        );

        if (!equipment) {

            return res.status(404).json({
                message: "Equipment Not Found"
            });
        }

        if (equipment.available <= 0) {

            return res.status(400).json({
                message: "Equipment Not Available"
            });
        }

        equipment.available--;

        await equipment.save();

        const transaction = new Transaction({

            equipmentId,

            borrowerName,

            referenceId:
                "TXN" + Date.now()
        });

        await transaction.save();

        res.json({
            message: "Equipment Borrowed Successfully",
            transaction
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});


// Return Equipment
router.put("/return/:id", async (req, res) => {

    try {

        const transaction =
            await Transaction.findById(
                req.params.id
            );

        if (!transaction) {

            return res.status(404).json({
                message: "Transaction Not Found"
            });
        }

        transaction.status = "Returned";
        transaction.returnDate = new Date();

        await transaction.save();

        const equipment =
            await Equipment.findById(
                transaction.equipmentId
            );

        equipment.available++;

        await equipment.save();

        res.json({
            message: "Equipment Returned",
            transaction
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});


// Active Transactions
router.get("/active", async (req, res) => {

    try {

        const data =
            await Transaction.find({
                status: "Borrowed"
            }).populate("equipmentId");

        res.json(data);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});


// Completed Transactions
router.get("/completed", async (req, res) => {

    try {

        const data =
            await Transaction.find({
                status: "Returned"
            }).populate("equipmentId");

        res.json(data);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;