const router = require('express').Router();
const mongoose = require('mongoose');
const Car = require('../models/car.js');
const User = require('../models/user.js');
const Order = require('../models/order.js');

// Create a new order 
router.post('/addneworder', async(req, res) => {
    const newOrder = new Order(req.body);

    // Check if user ID is valid
    if (!mongoose.Types.ObjectId.isValid(req.body.userId)) {
        return res.status(400).json("Invalid user ID");
    }

    // Check if car ID is valid
    if (!mongoose.Types.ObjectId.isValid(req.body.carId)) {
        return res.status(400).json("Invalid car ID");
    }
    
    // Check if car is available
    const car = await Car.findById(req.body.carId); 
    if (!car.isAvailable()) {
        return res.status(400).json("Car is not available");
    }
    
    // Change reserveUntil date to today's date 11:59pm and save it to car
    const now = new Date();
    const reserveUntil = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
    car.reserveUntil = reserveUntil;

    // Save the updated car document
    try {
        await car.save();
    } catch(err) {
        return res.status(500).json({ error: "Error updating car" });
    }

    try {
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;