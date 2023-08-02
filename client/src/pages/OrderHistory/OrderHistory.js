import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

export default function OrderHistory() {
  const orders = [
    { id: 1, car: 'Toyota Camry', pickupTime: '2022-01-01 10:00 AM', returnTime: '2022-01-02 10:00 AM', status: 'Completed' },
    { id: 2, car: 'Honda Civic', pickupTime: '2022-01-03 10:00 AM', returnTime: '2022-01-04 10:00 AM', status: 'In Progress' },
    { id: 3, car: 'Nissan Altima', pickupTime: '2022-01-05 10:00 AM', returnTime: '2022-01-06 10:00 AM', status: 'Cancelled' },
  ];

  return (
    <div className="w-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-6">Order History</h1>
        <div className="hidden md:block">
          {/* Table for desktop screens (md and above) */}
          <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="text-left text-gray-600">
                <th className="py-3 px-4 bg-gray-200 font-semibold uppercase">ID</th>
                <th className="py-3 px-4 bg-gray-200 font-semibold uppercase">Car</th>
                <th className="py-3 px-4 bg-gray-200 font-semibold uppercase">Pickup Time</th>
                <th className="py-3 px-4 bg-gray-200 font-semibold uppercase">Return Time</th>
                <th className="py-3 px-4 bg-gray-200 font-semibold uppercase">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-t border-gray-200">
                  <td className="py-4 px-4">{order.id}</td>
                  <td className="py-4 px-4">{order.car}</td>
                  <td className="py-4 px-4">{order.pickupTime}</td>
                  <td className="py-4 px-4">{order.returnTime}</td>
                  <td className={`py-4 px-4 ${order.status === 'Completed' ? 'text-green-600' : 'text-yellow-600'}`}>
                    {order.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="md:hidden">
          {/* Cards for mobile screens (sm and below) */}
          <div className="grid grid-cols-1 gap-4">
            {orders.map((order) => (
              <div key={order.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <div className="px-4 py-3 bg-gray-200 font-semibold uppercase">
                  ID: {order.id}
                </div>
                <div className="p-4">
                  <div className="font-semibold mb-2">Car</div>
                  <div>{order.car}</div>
                </div>
                <div className="p-4">
                  <div className="font-semibold mb-2">Pickup Time</div>
                  <div>{order.pickupTime}</div>
                </div>
                <div className="p-4">
                  <div className="font-semibold mb-2">Return Time</div>
                  <div>{order.returnTime}</div>
                </div>
                <div className={`px-4 py-3 ${order.status === 'Completed' ? 'bg-green-600 text-white' : 'bg-yellow-600 text-gray-800'}`}>
                  {order.status}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
