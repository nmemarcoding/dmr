import React, { useState } from 'react';
import AdminNav from '../../components/AdminNav/AdminNav';
import { publicRequest } from '../../hooks/requestMethods';

export default function AddNewCar() {
  const [carData, setCarData] = useState({
    make: '',
    model: '',
    type: '',
    fuelType: '',
    seat: '',
    year: '',
    color: '',
    image: '',
    price: '',
  });

  const availableCars = [
    'Acura',
    'Alfa Romeo',
    'Aston Martin',
    'Audi',
    'Bentley',
    'BMW',
    'Buick',
    'Cadillac',
    'Chevrolet',
    'Chrysler',
    'Dodge',
    'Ferrari',
    'Fiat',
    'Ford',
    'Genesis',
    'GMC',
    'Honda',
    'Hyundai',
    'Infiniti',
    'Jaguar',
    'Jeep',
    'Kia',
    'Lamborghini',
    'Land Rover',
    'Lexus',
    'Lincoln',
    'Lotus',
    'Maserati',
    'Mazda',
    'McLaren',
    'Mercedes-Benz',
    'Mini',
    'Mitsubishi',
    'Nissan',
    'Porsche',
    'Ram',
    'Rolls-Royce',
    'Subaru',
    'Tesla',
    'Toyota',
    'Volkswagen',
    'Volvo'
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCarData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(carData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
    publicRequest()
      .post('/car/addnewcar', carData)
      .then((res) => {
        window.alert('New car added!');
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        window.alert('Something went wrong. Please try again.');
        window.location.reload();
      });
  };

  return (
    <div className="w-screen h-screen">
      <AdminNav />
      {/* create section for new car input */}
      <div className="w-full h-full flex justify-center items-center">
        <div className="w-11/12 md:w-1/2 rounded-lg bg-gray-200 shadow-xl p-4 border-b-8 border-yellow-500">
          <form className="w-full flex flex-col justify-center items-center" onSubmit={handleSubmit}>
            <select
              className="w-full md:w-1/2 h-10 rounded-md shadow-md mb-4 px-2"
              name="make"
              value={carData.make}
              onChange={handleInputChange}
            >
              <option value="">Select a car</option>
              {availableCars.map((car) => (
                <option key={car} value={car}>
                  {car}
                </option>
              ))}
            </select>
            <input
              className="w-full md:w-1/2 h-10 rounded-md shadow-md mb-4 px-2"
              type="text"
              placeholder="Car Model"
              name="model"
              value={carData.model}
              onChange={handleInputChange}
            />
            <select
              className="w-full md:w-1/2 h-10 rounded-md shadow-md mb-4 px-2"
              name="type"
              value={carData.type}
              onChange={handleInputChange}
            >
              <option value="">Select Car Type</option>
              <option value="sedan">Sedan</option>
              <option value="suv">SUV</option>
              <option value="truck">Truck</option>
              <option value="van">Van</option>
              <option value="coupe">Coupe</option>
              <option value="convertible">Convertible</option>
              <option value="wagon">Wagon</option>
            </select>
            <select
              className="w-full md:w-1/2 h-10 rounded-md shadow-md mb-4 px-2"
              name="fuelType"
              value={carData.fuelType}
              onChange={handleInputChange}
            >
              <option value="">Select Fuel Type</option>
              <option value="gas">Gas</option>
              <option value="diesel">Diesel</option>
              <option value="electric">Electric</option>
              <option value="hybrid">Hybrid</option>
            </select>
            <select
              className="w-full md:w-1/2 h-10 rounded-md shadow-md mb-4 px-2"
              name="seat"
              value={carData.seat}
              onChange={handleInputChange}
            >
              <option value="">Select Seat</option>
              <option value="2">2</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="7">7</option>
            </select>
            <input
              className="w-full md:w-1/2 h-10 rounded-md shadow-md mb-4 px-2"
              type="number"
              placeholder="Car Year"
              name="year"
              value={carData.year}
              onChange={handleInputChange}
              min="1900"
              max="2099"
            />
            <select
              className="w-full md:w-1/2 h-10 rounded-md shadow-md mb-4 px-2"
              name="color"
              value={carData.color}
              onChange={handleInputChange}
            >
              <option value="">Select a color</option>
              <option value="black">Black</option>
              <option value="white">White</option>
              <option value="silver">Silver</option>
              <option value="gray">Gray</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
              <option value="yellow">Yellow</option>
              <option value="orange">Orange</option>
              <option value="purple">Purple</option>
              <option value="brown">Brown</option>
            </select>
            <input
              className="w-full md:w-1/2 h-10 rounded-md shadow-md mb-4 px-2"
              type="file"
              placeholder="Car Image"
              name="image"
              value={carData.image}
              onChange={handleInputChange}
            />
            <input
              className="w-full md:w-1/2 h-10 rounded-md shadow-md mb-4 px-2"
              type="text"
              placeholder="Car Price"
              name="price"
              value={carData.price}
              onChange={handleInputChange}
            />
            <button className="w-full md:w-1/2 h-10 rounded-md shadow-md mb-4 bg-yellow-500 text-white">
              Add New Car
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
