const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    usn: {
        type: String,
        required: true,
        unique: true
    },

    aptitude: {
        type: Number,
        required: true
    },

    coding: {
        type: Number,
        required: true
    },

    communication: {
        type: Number,
        required: true
    },

    readinessScore: {
        type: Number,
        default: 0
    }

});

module.exports = mongoose.model(
    "Student",
    studentSchema
);