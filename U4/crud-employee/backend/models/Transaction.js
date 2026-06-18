const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema({

    equipmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Equipment"
    },

    borrowerName: {
        type: String,
        required: true
    },

    referenceId: {
        type: String,
        unique: true
    },

    borrowDate: {
        type: Date,
        default: Date.now
    },

    returnDate: {
        type: Date,
        default: null
    },

    status: {
        type: String,
        default: "Borrowed"
    }

});

module.exports = mongoose.model(
    "Transaction",
    transactionSchema
);