const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    carId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Car',
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    orderTime: {
        type: Date,
        default: Date.now,
    }, 
    pickUpTime: {
        type: Date,
        default: null,
    },
    returnTime: {
        type: Date,
        default: null,
    }
}, {timestamps: true});

module.exports = mongoose.model("Order", OrderSchema);

   

