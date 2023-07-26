import React from 'react'

export default function RentalDetails() {
  return (
    <>
      <div className="w-full md:w-1/2  p-4 md:p-10 rounded-lg shadow-lg">
        <img className="w-full h-64 object-cover mb-4 rounded" src="https://assets.gcs.ehi.com/content/enterprise_cros/data/vehicle/bookingCountries/US/CARS/ECAR.doi.768.high.imageSmallThreeQuarterNodePath.png/1492780366644.png" alt="BMW X5" />
        <h1 className="text-2xl font-bold text-gray-800 tracking-wide mb-4">BMW X5</h1>
        <h2 className="text-lg font-bold text-gray-600 tracking-wide mb-8">WHITE</h2>
        
        <div className="border-b-2 border-gray-300 py-4">
          <h3 className="text-lg font-bold text-gray-600 tracking-wide">SEATING</h3>
          <p className="text-gray-800">5</p>
        </div>
        <div className="border-b-2 border-gray-300 py-4">
          <h3 className="text-lg font-bold text-gray-600 tracking-wide">FUEL TYPE</h3>
          <p className="text-gray-800">GASOLINE</p>
        </div>
        <div className="border-b-2 border-gray-300 py-4">
          <h3 className="text-lg font-bold text-gray-600 tracking-wide">PICK-UP DUE</h3>
          <p className="text-gray-800">6 PM</p>
        </div>
        <div className="border-b-2 border-gray-300 py-4">
          <h3 className="text-lg font-bold text-gray-600 tracking-wide">PRICE</h3>
          <p className="text-gray-800">$85 <span className="text-sm">Per Day</span></p>
        </div>

        <div className="flex justify-center py-4">
          <button className="bg-yellow-500 text-white font-bold py-2 px-4 rounded mt-4 sm:mt-0 shadow-md">Reserve Now</button>
        </div>
      </div>
    </>
  )
}
