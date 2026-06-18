const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

    productId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    },

    buyer: {
        type: String,
        required: true
    },

    quantity: {
        type: Number,
        required: true
    },

    total: {
        type: Number,
        required: true
    },

    status: {
        type: String,
        default: "Placed"
    }

}, {
    timestamps: true
});

module.exports = mongoose.model(
    "Order",
    orderSchema
);