const router = require('express').Router();
const Car = require('../models/car.js');

// add new car
router.post('/addnewcar', async(req, res) => {
    const newCar = new Car(req.body);
    try {
        const savedCar = await newCar.save();
        res.status(200).json(savedCar);
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
}
);


module.exports = router;