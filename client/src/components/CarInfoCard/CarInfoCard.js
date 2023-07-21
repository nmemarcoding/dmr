import React from 'react'
const car = {
    make: "Tesla",
    model: "Model S",
    image: "https://assets.gcs.ehi.com/content/enterprise_cros/data/vehicle/bookingCountries/US/CARS/ECAR.doi.768.high.imageSmallThreeQuarterNodePath.png/1492780366644.png",
    price: 150.99,
    year: 2022,
    color: "Red",
};

export default function CarInfoCard() {
    return (
        <div className="flex flex-col sm:flex-row bg-white rounded-lg shadow-md sm:justify-between my-4 mx-2 sm:mx-0">
            <img src={car.image} alt={car.make} className="w-full sm:w-1/4 h-48 sm:h-auto object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-t-none" />
            <div className="flex flex-col justify-center p-4 w-full sm:w-auto">
                <h2 className="text-xl font-bold mb-2">{car.make} {car.model}</h2>
                <div className="flex sm:flex-col md:flex-row">
                    <h3 className="mr-4">Electric</h3>
                    <h3 className="">4 people</h3>
                </div>
            </div>
            <div className="flex flex-col justify-center p-4 w-full sm:w-auto">
                <p className="text-2xl font-bold mb-2">${car.price}</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 sm:mt-0">
                Select
                </button>
            </div>
        </div>
    )
}