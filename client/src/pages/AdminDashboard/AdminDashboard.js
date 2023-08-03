import React from 'react';
import AdminNav from '../../components/AdminNav/AdminNav';

const AdminDashboard = () => {
  // Placeholder data (you can replace this with actual data from your backend)
  const data = {
    totalCars: 100,
    availableCars: 70,
    rentedOutCars: 25,
    outOfCompanyCars: 5,
    suvCars: 30,
    sedanCars: 40,
    vanCars: 20,
    totalRevenue: 5000, // In dollars
    activeBookings: 15,
  };

  return (
    <div className="w-screen">
      <AdminNav />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8 p-8">
        {/* Total Cars */}
        <div className="bg-blue-500 p-4 rounded-lg">
          <h2 className="text-white text-lg mb-2">Total Cars</h2>
          <p className="text-white text-4xl font-bold">{data.totalCars}</p>
        </div>

        {/* Available Cars */}
        <div className="bg-green-500 p-4 rounded-lg">
          <h2 className="text-white text-lg mb-2">Available Cars</h2>
          <p className="text-white text-4xl font-bold">{data.availableCars}</p>
        </div>

        {/* Rented Out Cars */}
        <div className="bg-yellow-500 p-4 rounded-lg">
          <h2 className="text-white text-lg mb-2">Rented Out Cars</h2>
          <p className="text-white text-4xl font-bold">{data.rentedOutCars}</p>
        </div>

        {/* Out of Company Cars */}
        <div className="bg-red-500 p-4 rounded-lg">
          <h2 className="text-white text-lg mb-2">Out of Company Cars</h2>
          <p className="text-white text-4xl font-bold">{data.outOfCompanyCars}</p>
        </div>

        {/* SUV Cars */}
        <div className="bg-indigo-500 p-4 rounded-lg">
          <h2 className="text-white text-lg mb-2">SUV Cars</h2>
          <p className="text-white text-4xl font-bold">{data.suvCars}</p>
        </div>

        {/* Sedan Cars */}
        <div className="bg-purple-500 p-4 rounded-lg">
          <h2 className="text-white text-lg mb-2">Sedan Cars</h2>
          <p className="text-white text-4xl font-bold">{data.sedanCars}</p>
        </div>

        {/* Van Cars */}
        <div className="bg-pink-500 p-4 rounded-lg">
          <h2 className="text-white text-lg mb-2">Van Cars</h2>
          <p className="text-white text-4xl font-bold">{data.vanCars}</p>
        </div>

        {/* Total Revenue */}
        <div className="bg-yellow-400 p-4 rounded-lg">
          <h2 className="text-white text-lg mb-2">Total Revenue</h2>
          <p className="text-white text-4xl font-bold">${data.totalRevenue}</p>
        </div>

        {/* Active Bookings */}
        <div className="bg-green-400 p-4 rounded-lg">
          <h2 className="text-white text-lg mb-2">Active Bookings</h2>
          <p className="text-white text-4xl font-bold">{data.activeBookings}</p>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
