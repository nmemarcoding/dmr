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
        default: true,
    },
    rented: {
        type: Boolean,
        default: true,
    },
    image: {
        type: String,
        required: true,
    },
    rentedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        default: null
    },
    reserveUntil: {
        type: Date,
        default: null,
    },
    search: {
        type: String,
    },
    licensePlateNumber: {
        type: String,
        required: true,
    }
}, {timestamps: true});

CarSchema.methods.isAvailable = function() {
    const now = new Date();
    const sameDay = this.reserveUntil?.getDate() === now.getDate() && this.reserveUntil?.getMonth() === now.getMonth() && this.reserveUntil?.getFullYear() === now.getFullYear();
    return this.available && this.rented &&  (this.reserveUntil === null || this.reserveUntil < now )&& !sameDay;
};

CarSchema.pre('save', function(next) {
    const car = this;
    car.search = `${car.make} ${car.model} ${car.type} ${car.fuelType} ${car.seat} ${car.year} ${car.color} `;
    next();
});

module.exports = mongoose.model("Car", CarSchema);