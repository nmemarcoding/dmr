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

// get cars by search query on searxh field 
router.get('/search', async (req, res) => {
    try {
        const searchTerm = req.query.search;
        const searchTermsArray = searchTerm.split(' ');

        // Create an array of regex expressions for each term
        const regexExpressions = searchTermsArray.map(term => ({
            search: { $regex: term, $options: "i" }
        }));

        // Combine the regex expressions with "$and" to search for all terms
        const cars = await Car.find({ $and: regexExpressions });

        res.status(200).json(cars);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});



// get car by search query on searxh field when available is true
router.get('/searchavailable', async(req, res) => {
    try {
        const cars = await Car.find({
            search: {
                $regex: req.query.search,
                $options: "i"
            },
            available: true
        });
        res.status(200).json(cars);
    } catch (err) {
        res.status(500).json(err);
        console.log(err)
    }
}
);








module.exports = router;