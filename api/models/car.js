const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    make: {
        type: String,
        required: true,
    },
    model:{
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    fuelType: {
        type: String,
        required: true,
    },
    seat: {
        type: Number,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    available: {
        type: Boolean,
        default: true
    },
    image: {
        type: String,
        required: true,
    }
}, {timestamps: true});

module.exports = mongoose.model("Car", CarSchema);
