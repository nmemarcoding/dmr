import React, { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import useStore from '../../store';
import { publicRequest } from '../../hooks/requestMethods';

export default function OrderHistory() {
    const [userId, setUserId] = useState(useStore((state) => state?.userInfo?._id));
    const [orders, setOrders] = useState([]);

    useEffect(() => { 
        publicRequest().get(`/order/getallorders?userid=${userId}`)
        .then((res) => {
            // Assuming the API response is an array of orders sorted by orderTime (newest first)
            const sortedOrders = res.data.sort((a, b) => new Date(b.orderTime) - new Date(a.orderTime));
            setOrders(sortedOrders);
        })
        .catch((err) => console.log(err));
    }, [userId]); // Add the userId dependency to fetch orders when the userId changes

    // Function to determine the status based on pickUpTime and returnTime
    const getStatus = (order) => {
        const orderTime = new Date(order.orderTime);
        const today = new Date();

        // Calculate the difference in milliseconds between the current date and orderTime
        const timeDifference = today.getTime() - orderTime.getTime();

        // Calculate the number of days between today and orderTime
        const daysDifference = timeDifference / (1000 * 3600 * 24);

        if (!order.pickUpTime && !order.returnTime) {
            return daysDifference > 1 ? "Order Canceled" : "Not Picked Up";
        } else if (order.pickUpTime && !order.returnTime) {
            return "Picked Up";
        } else if (order.pickUpTime && order.returnTime) {
            return "Returned";
        } else {
            return "Unknown";
        }
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
        return new Date(dateString).toLocaleString(undefined, options);
    };

    return (
        <div className="w-screen bg-gray-100">
            <Navbar />
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-semibold mb-6">Order History</h1>
                <div className="hidden md:block">
                    {/* Table for desktop screens (md and above) */}
                    {/* ... (rest of the desktop table code) ... */}
                </div>
                <div className="md:hidden">
                    {/* Cards for mobile screens (sm and below) */}
                    <div className="grid grid-cols-1 gap-4">
                        {orders.map((order) => (
                            <div key={order._id} className="bg-white shadow-md rounded-lg overflow-hidden">
                                <div className="p-4">
                                    <div className="font-semibold mb-2">Car</div>
                                    <div>{`${order.carId.make} ${order.carId.model}`}</div>
                                </div>
                                <div className="p-4">
                                    <div className="font-semibold mb-2">Order Time</div>
                                    <div>{formatDate(order.orderTime)}</div>
                                </div>
                                <div className="p-4">
                                    <div className="font-semibold mb-2">Pickup Time</div>
                                    <div>
                                        {order.pickUpTime ? (
                                            <span>
                                                {formatDate(order.pickUpTime)} {getStatus(order) === 'Returned' && <span className="text-green-600 ml-1">✓</span>}
                                            </span>
                                        ) : (
                                            "Not Picked Up"
                                        )}
                                    </div>
                                </div>
                                <div className="p-4">
                                    <div className="font-semibold mb-2">Return Time</div>
                                    <div>
                                        {order.returnTime ? (
                                            <span>
                                                {formatDate(order.returnTime)} {getStatus(order) === 'Returned' && <span className="text-green-600 ml-1">✓</span>}
                                            </span>
                                        ) : (
                                            "Not Returned"
                                        )}
                                    </div>
                                </div>
                                <div className={`px-4 py-3 ${getStatus(order) === 'Returned' ? 'bg-green-600 text-white' : 'bg-yellow-600 text-gray-800'}`}>
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
