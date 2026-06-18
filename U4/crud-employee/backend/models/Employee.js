const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    empId: Number,
    name: String,
    age: Number,
    department: String,
    salary: Number
});

module.exports =mongoose.model("Employee", employeeSchema);