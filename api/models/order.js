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
  },
}, { timestamps: true });

OrderSchema.methods.calculateTotal = function() {
    const oneDay = 24 * 60 * 60 * 1000; // hours * minutes * seconds * milliseconds
    const pickUpTime = this.pickUpTime || Date.now();
    const returnTime = this.returnTime || Date.now();
    let days = Math.round(Math.abs((pickUpTime - returnTime) / oneDay));
  
    // If days difference is 0, set it to 1
    if (days === 0) {
      days = 1;
    }
  
    const carPricePerDay = this.carId.price;
    return days * carPricePerDay;
  };
  

module.exports = mongoose.model('Order', OrderSchema);