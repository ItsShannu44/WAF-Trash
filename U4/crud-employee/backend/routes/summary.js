const express = require("express");
const router = express.Router();

const Employee = require("../models/Employee");
router.get("/", async(req,res)=>
{
    try{
        const report= await Employee.aggregate([
            {
            $group:{_id:"$department",employeeCount:{$sum:1},
                totalSalary:{$sum:"$salary"},averageSalary:{$avg:"$salary"}}}
        ]);
        res.json(report);
    }
    catch(err)
    {
        res.status(500).json(err)
    }
});
module.exports = router;