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
        let cars = await Car.find({ $and: regexExpressions });
        cars = cars.filter(car => car.isAvailable());

        res.status(200).json(cars);
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

// get all cars total count available and rented
router.get('/getallcarstotal', async(req, res) => {
    try {
        const cars = await Car.find();
        const totalCars = cars.length;
        const availableCars = cars.filter(car => car.isAvailable()).length;
        const rentedCars = totalCars - availableCars;
        const gassCarAvailable = cars.filter(car => car.isAvailable() && car.fuelType === "Gas").length;
        const electricCarAvailable = cars.filter(car => car.isAvailable() && car.fuelType === "Electric").length;
        const hybridCarAvailable = cars.filter(car => car.isAvailable() && car.fuelType === "Hybrid").length;
        const gassCarRented = cars.filter(car => !car.isAvailable() && car.fuelType === "Gas").length;
        const electricCarRented = cars.filter(car => !car.isAvailable() && car.fuelType === "Electric").length;
        const hybridCarRented = cars.filter(car => !car.isAvailable() && car.fuelType === "Hybrid").length;


        res.status(200).json({ totalCars, availableCars, rentedCars, gassCarAvailable, electricCarAvailable, gassCarRented, electricCarRented, hybridCarAvailable, hybridCarRented });

    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});








module.exports = router;