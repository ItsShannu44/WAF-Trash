const express = require("express");
const router = express.Router();

const Student = require("../models/Student");


// Add Student
router.post("/add", async (req, res) => {

    try {

        const {
            name,
            usn,
            aptitude,
            coding,
            communication
        } = req.body;

        const readinessScore =
            (Number(aptitude) +
            Number(coding) +
            Number(communication)) / 3;

        const student = new Student({

            name,
            usn,
            aptitude,
            coding,
            communication,
            readinessScore

        });

        await student.save();

        res.status(201).json({
            message: "Student Added",
            student
        });

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});


// Get Students
router.get("/", async (req, res) => {

    try {

        const students =
            await Student.find();

        res.json(students);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});


// Top Performers
router.get("/top", async (req, res) => {

    try {

        const students =
            await Student.find()
            .sort({
                readinessScore: -1
            });

        res.json(students);

    } catch (error) {

        res.status(500).json({
            message: error.message
        });
    }
});

module.exports = router;