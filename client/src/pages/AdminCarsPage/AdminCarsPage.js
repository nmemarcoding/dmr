import React, { useState, useEffect } from 'react';
import AdminNav from '../../components/AdminNav/AdminNav';
import { publicRequest } from '../../hooks/requestMethods';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

export default function AdminCarsPage() {
  const [cars, setCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    publicRequest()
      .get('/car/getallcars')
      .then((res) => {
        setCars(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCars = cars.filter((car) => 
    `${car.make} ${car.model} ${car.type} ${car.fuelType} ${car.year} ${car.color} ${car.price} ${car.licensePlateNumber} ${car.available}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="w-screen h-screen flex flex-col">
      <AdminNav />
      <div className="flex-grow p-4 l:px-0">
        {isLoading ? (
          <LoadingSpinner/>
        ) : (
          <>
            <input
              type="text"
              placeholder="Search..."
              className="p-2 border rounded-md mb-4"
              value={searchTerm}
              onChange={handleSearch}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {filteredCars.map((car) => (
            <div key={car._id} className="bg-white rounded-xl shadow-lg p-4">
              <img
                src="data:image/jpeg;base64,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"
                alt={`${car.make} ${car.model}`}
                className="w-full h-40 object-cover rounded-t-xl"
              />
              <div className="p-2">
                <h3 className="text-xl font-semibold">{car.model}</h3>
                <p className="text-gray-700">{car.make}</p>
                <p className="text-gray-700">{car.type}</p>
                <p className="text-gray-700">Fuel: {car.fuelType}</p>
                <p className="text-gray-700">Seats: {car.seat}</p>
                <p className="text-gray-700">{car.year}</p>
                <p className="text-gray-700">Color: {car.color}</p>
                <p className="text-gray-700">Price: {car.price}</p>
                <p className="text-gray-700">License Plate: {car.licensePlateNumber}</p>
                <p className={`text-${car.available ? 'green' : 'red'}-700 font-semibold`}>
                 {car.available ? 'Available' : 'Not Available'}
                </p>
              </div>
            </div>
          ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
