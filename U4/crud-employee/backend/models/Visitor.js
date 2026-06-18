const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true
    },

    category: {
        type: String,
        enum: ["Parent", "Vendor", "Guest", "Alumni"],
        required: true
    },

    phone: {
        type: String,
        required: true,
        unique: true
    },

    purpose: {
        type: String,
        required: true
    },

    entryTime: {
        type: Date,
        default: Date.now
    },

    exitTime: {
        type: Date,
        default: null
    }
});

module.exports = mongoose.model("Visitor", visitorSchema);