import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import useStore from '../../store';
import { publicRequest } from '../../hooks/requestMethods';

export default function OrderHistory() {
  const [userId, setUserId] = useState(useStore((state) => state?.userInfo?._id));
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Check if userId is not empty or falsy before making the API request
    if (userId) {
      
      publicRequest()
        .get(`/order/getuserorders?userid=${userId}`)
        .then((res) => {
          // Assuming the API response is an array of orders sorted by orderTime (newest first)
          const sortedOrders = res.data.sort(
            (a, b) => new Date(b.orderTime) - new Date(a.orderTime)
          );
          setOrders(sortedOrders);
        })
        .catch((err) => console.log(err));
    }
  }, [userId]);
   // Add the userId dependency to fetch orders when the userId changes

  // Function to determine the status based on pickUpTime and returnTime
  const getStatus = (order) => {
    const orderTime = new Date(order.orderTime);
    const today = new Date();
    const timeDifference = today.getTime() - orderTime.getTime();
    const daysDifference = timeDifference / (1000 * 3600 * 24);

    if (!order.pickUpTime && !order.returnTime) {
      return daysDifference > 1 ? 'Order Canceled' : 'Not Picked Up';
    } else if (order.pickUpTime && !order.returnTime) {
      return 'Picked Up';
    } else if (order.pickUpTime && order.returnTime) {
      return 'Returned';
    } else {
      return 'Unknown';
    }
  };

  const formatDate = (dateString) => {
    const options = {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    return new Date(dateString).toLocaleString(undefined, options);
  };

  return (
    <div className="w-screen">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-semibold mb-6">Order History</h1>
        {/* Table for desktop screens (md and above) */}
        <div className="md:block hidden">
          <table className="table-auto w-full">
            {/* Table headers */}
            <thead>
              <tr>
                <th className="px-4 py-2 border">Car</th>
                <th className="px-4 py-2 border">License Plate Number</th>
                <th className="px-4 py-2 border">Order Time</th>
                <th className="px-4 py-2 border">Pickup Time</th>
                <th className="px-4 py-2 border">Return Time</th>
                <th className="px-4 py-2 border">Status</th>
              </tr>
            </thead>
            {/* Table body */}
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td className="border px-4 py-2">
                    {`${order.carId.make} ${order.carId.model}`}
                  </td>
                  <td className="border px-4 py-2">{order.carId.licensePlateNumber}</td>
                  <td className="border px-4 py-2">
                    {formatDate(order.orderTime)}
                  </td>
                  <td className="border px-4 py-2">
                    {order.pickUpTime ? (
                      <span>
                        {formatDate(order.pickUpTime)}{' '}
                        {getStatus(order) === 'Returned' && (
                          <span className="text-green-600 ml-1">✓</span>
                        )}
                      </span>
                    ) : (
                      'Not Picked Up'
                    )}
                  </td>
                  <td className="border px-4 py-2">
                    {order.returnTime ? (
                      <span>
                        {formatDate(order.returnTime)}{' '}
                        {getStatus(order) === 'Returned' && (
                          <span className="text-green-600 ml-1">✓</span>
                        )}
                      </span>
                    ) : (
                      'Not Returned'
                    )}
                  </td>
                  <td
                    className={`border px-4 py-2 ${
                      getStatus(order) === 'Returned'
                        ? 'bg-green-600 text-white'
                        : 'bg-yellow-600 text-gray-800'
                    }`}
                  >
                    {getStatus(order)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Cards for mobile screens (sm and below) */}
        <div className="md:hidden block">
          <div className="grid grid-cols-1 gap-4">
            {orders.map((order) => (
              <div
                key={order._id}
                className="bg-white shadow-md rounded-lg overflow-hidden border" // Add "border" class here
              >
                {/* Card content */}
                <div className="p-4 border-b">
                  <div className="font-semibold mb-2">Car</div>
                  <div>{`${order.carId.make} ${order.carId.model}`}</div>
                </div>
                <div className="p-4 border-b">
                  <div className="font-semibold mb-2">License Plate Number</div>
                  <div>{order.carId.licensePlateNumber}</div>
                </div>
                <div className="p-4 border-b">
                  <div className="font-semibold mb-2">Order Time</div>
                  <div>{formatDate(order.orderTime)}</div>
                </div>
                <div className="p-4 border-b">
                  <div className="font-semibold mb-2">Pickup Time</div>
                  <div>
                    {order.pickUpTime ? (
                      <span>
                        {formatDate(order.pickUpTime)}{' '}
                        {getStatus(order) === 'Returned' && (
                          <span className="text-green-600 ml-1">✓</span>
                        )}
                      </span>
                    ) : (
                      'Not Picked Up'
                    )}
                  </div>
                </div>
                <div className="p-4 border-b">
                  <div className="font-semibold mb-2">Return Time</div>
                  <div>
                    {order.returnTime ? (
                      <span>
                        {formatDate(order.returnTime)}{' '}
                        {getStatus(order) === 'Returned' && (
                          <span className="text-green-600 ml-1">✓</span>
                        )}
                      </span>
                    ) : (
                      'Not Returned'
                    )}
                  </div>
                </div>
                <div
                  className={`px-4 py-3 ${
                    getStatus(order) === 'Returned'
                      ? 'bg-green-600 text-white'
                      : 'bg-yellow-600 text-gray-800'
                  }`}
                >
                  {getStatus(order)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
