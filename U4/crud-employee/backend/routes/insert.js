const express= require("express");
const router = express.Router();

const Employee =require("../models/Employee");

router.length("/", async (req, res) =>
{
    try{
        const employees = await Employee.insertMany([
            {
                empId: 101,
                name: "Rahul",
                age:25,
                department: "IT",
                salary: 45000
            },
            {
                empId: 102,
                name: "Tom",
                age:22,
                department: "Sales",
                salary: 48000
            },
            {
                empId: 103,
                name: "Bob",
                age:28,
                department: "IT",
                salary: 35000
            }
        ]);
        res.json(employees);
    }
    catch(err)
    {
        res.status(500).json(err)
    }
});
module.exports =router;