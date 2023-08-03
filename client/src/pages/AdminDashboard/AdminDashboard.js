import React, { useEffect, useState } from 'react';
import AdminNav from '../../components/AdminNav/AdminNav';
import { publicRequest } from '../../hooks/requestMethods';

const AdminDashboard = () => {
  const [carDetails, setCarDetails] = useState({
    totalCars: 0,
    availableCars: 0,
    rentedCars: 0,
    gassCarAvailable: 0,
    electricCarAvailable: 0,
    gassCarRented: 0,
    electricCarRented: 0,
    hybridCarAvailable: 0,
    hybridCarRented: 0
  });

  useEffect(() => {
    publicRequest()
      .get('/car/getallcarstotal')
      .then((res) => {
        setCarDetails(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-screen">
      <AdminNav />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 p-8">
        {/* Total Cars */}
        <div className="bg-blue-500 p-4 rounded-lg">
          <h2 className="text-white text-lg mb-2">Total Cars</h2>
          <p className="text-white text-4xl font-bold">{carDetails.totalCars}</p>
        </div>

        {/* Available Cars */}
        <div className="bg-green-500 p-4 rounded-lg">
          <h2 className="text-white text-lg mb-2">Available Cars</h2>
          <p className="text-white text-4xl font-bold">{carDetails.availableCars}</p>
        </div>

        {/* Rented Cars */}
        <div className="bg-yellow-500 p-4 rounded-lg">
          <h2 className="text-white text-lg mb-2">Rented Cars</h2>
          <p className="text-white text-4xl font-bold">{carDetails.rentedCars}</p>
        </div>

        {/* Gass Cars Available */}
        <div className="bg-indigo-500 p-4 rounded-lg">
          <h2 className="text-white text-lg mb-2">Gas Cars Available</h2>
          <p className="text-white text-4xl font-bold">{carDetails.gassCarAvailable}</p>
        </div>

        {/* Electric Cars Available */}
        <div className="bg-purple-500 p-4 rounded-lg">
          <h2 className="text-white text-lg mb-2">Electric Cars Available</h2>
          <p className="text-white text-4xl font-bold">{carDetails.electricCarAvailable}</p>
        </div>

        {/* Gass Cars Rented */}
        <div className="bg-pink-500 p-4 rounded-lg">
          <h2 className="text-white text-lg mb-2">Gas Cars Rented</h2>
          <p className="text-white text-4xl font-bold">{carDetails.gassCarRented}</p>
        </div>

        {/* Electric Cars Rented */}
        <div className="bg-yellow-400 p-4 rounded-lg">
          <h2 className="text-white text-lg mb-2">Electric Cars Rented</h2>
          <p className="text-white text-4xl font-bold">{carDetails.electricCarRented}</p>
        </div>

        {/* Hybrid Cars Available */}
        <div className="bg-green-400 p-4 rounded-lg">
          <h2 className="text-white text-lg mb-2">Hybrid Cars Available</h2>
          <p className="text-white text-4xl font-bold">{carDetails.hybridCarAvailable}</p>
        </div>

        {/* Hybrid Cars Rented */}
        <div className="bg-blue-400 p-4 rounded-lg">
          <h2 className="text-white text-lg mb-2">Hybrid Cars Rented</h2>
          <p className="text-white text-4xl font-bold">{carDetails.hybridCarRented}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;