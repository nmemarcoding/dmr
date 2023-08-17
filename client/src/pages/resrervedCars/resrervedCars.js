import React, { useEffect, useState } from 'react';
import AdminNav from '../../components/AdminNav/AdminNav';
import AdminReservedCarTable from '../../components/AdminReservedCarTable/AdminReservedCarTable';
import { publicRequest } from '../../hooks/requestMethods'
import useStore from '../../store';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

export default function ReservedCars() {
  const [searchTerm, setSearchTerm] = useState('');
  const [sortOption, setSortOption] = useState('id'); 
  const [ordersDetails, setOrderDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const userInfo = useStore((state) => state?.userInfo)

  useEffect(() => {
    publicRequest().get('/order/getallorders')
    .then((res) => {
      setOrderDetails(res.data);
      setIsLoading(false); // set isLoading to false when data is fetched
    })
    .catch((err) => console.log(err))
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (event) => {
    setSortOption(event.target.value);
  };

  const filteredOrders = ordersDetails.filter((order) =>
    `${order.userId?.firstName} ${order.userId?.lastName} ${order.carId?.licensePlateNumber} ${order.carId.make} ${order.carId.model} `.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let currentOrders = filteredOrders;

  if (sortOption === 'status') {
    currentOrders = filteredOrders.sort((a, b) => {
      const statusOrder = { Pending: 1, Delivered: 2, Cancelled: 3 };
      return statusOrder[a.carId.available] - statusOrder[b.carId.available];
    });
  } else if (sortOption === 'date') {
    currentOrders = filteredOrders.sort((a, b) => new Date(b.orderTime) - new Date(a.orderTime));
  }

  const handelPickUp = (id) => {
    publicRequest().put(`/order/updatepickuptime/${id}`, {
      userId: userInfo._id,
    })
    .then((res) => {
      console.log(res.data);
      window.location.reload();
    })
    .catch((err) => console.log(err))
  };

  const handelReturn = (id) => {
    publicRequest().put(`/order/updatereturntime/${id}`)
    .then((res) => {
      window,alert('Car returned successfully');
      window.location.reload();
    })
    .catch((err) => console.log(err))
  };

  return (
    <div className='w-full px-2 sm:px-4 lg:px-0'>
      <AdminNav />
      <h1 className='text-2xl sm:text-3xl font-bold mt-8 mb-4'>Reserved Cars</h1>
      <input
        type='text'
        placeholder='Search by customer name or license plate'
        className='border border-gray-300 rounded-lg px-4 py-2 mb-2 sm:mb-0 sm:mr-4 w-full sm:w-auto'
        value={searchTerm}
        onChange={handleSearch}
      />
      <select
        className='border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-auto mt-2 sm:mt-0'
        value={sortOption}
        onChange={handleSort}
      >
        <option value='status'>Sort by Status</option>
        <option value='date'>Sort by Date</option>
      </select>

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        currentOrders.map((order) => (
          <AdminReservedCarTable 
            order={order} 
            key={order._id}
            handelPickUp={handelPickUp}
            handelReturn={handelReturn}
          />
        ))
      )}
    </div>
  );
}
