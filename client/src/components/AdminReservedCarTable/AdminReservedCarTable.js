import React from 'react';

export default function AdminReservedCarTable({ orders, searchTerm, sortOption, handleSearch, handleSort, onPickUp }) {
  const filteredOrders = orders.filter((order) =>
    order.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  let currentOrders = filteredOrders;

  if (sortOption === 'status') {
    currentOrders = filteredOrders.sort((a, b) => {
      const statusOrder = { Pending: 1, Delivered: 2, Cancelled: 3 };
      return statusOrder[a.status] - statusOrder[b.status];
    });
  } else if (sortOption === 'date') {
    currentOrders = filteredOrders.sort((a, b) => new Date(a.date) - new Date(b.date));
  } else {
    currentOrders = filteredOrders.sort((a, b) => a.id - b.id);
  }

  return (
    <div className='flex flex-col items-center sm:items-start w-full px-4 sm:px-0'>
      <h1 className='text-2xl sm:text-3xl font-bold mt-8 mb-4'>Reserved Cars</h1>
      <div className='flex flex-col sm:flex-row items-center mb-4 w-full'>
        <input
          type='text'
          placeholder='Search by customer name'
          className='border border-gray-300 rounded-lg px-4 py-2 mb-2 sm:mb-0 sm:mr-4 w-full sm:w-auto'
          value={searchTerm}
          onChange={handleSearch}
        />
        <select
          className='border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-auto mt-2 sm:mt-0'
          value={sortOption}
          onChange={handleSort}
        >
          <option value='id'>Sort by ID</option>
          <option value='status'>Sort by Status</option>
          <option value='date'>Sort by Date</option>
        </select>
      </div>
      <div className='w-full overflow-auto sm:hidden'>
        {currentOrders.map((order) => (
          <div key={order.id} className='border-b border-gray-300 p-4'>
            <div className='mb-2'>
              <strong>ID: </strong> {order.id}
            </div>
            <div className='mb-2'>
              <strong>Customer: </strong>
              {order.customer}
            </div>
            <div className='mb-2'>
              <strong>Car: </strong>
              {order.car}
            </div>
            <div className='mb-2'>
              <strong>Date: </strong>
              {order.date}
            </div>
            <div className='mb-2'>
              <strong>Status: </strong>
              {order.status}
            </div>
            <div className='mb-2'>
              {order.status === 'Pending' && (
                <button
                  className='px-2 py-1 rounded bg-blue-500 text-white'
                  onClick={() => onPickUp(order.id)}
                >
                  Pick Up
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className='hidden sm:block w-full'>
        <table className='table-auto w-full border border-gray-300 rounded-lg shadow-lg'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='px-2 sm:px-4 py-2'>ID</th>
              <th className='px-2 sm:px-4 py-2'>Customer</th>
              <th className='px-2 sm:px-4 py-2'>Car</th>
              <th className='px-2 sm:px-4 py-2'>Date</th>
              <th className='px-2 sm:px-4 py-2'>Status</th>
              <th className='px-2 sm:px-4 py-2'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentOrders.map((order) => (
              <tr key={order.id} className='border-b border-gray-300'>
                <td className='px-2 sm:px-4 py-2'>{order.id}</td>
                <td className='px-2 sm:px-4 py-2'>{order.customer}</td>
                <td className='px-2 sm:px-4 py-2'>{order.car}</td>
                <td className='px-2 sm:px-4 py-2'>{order.date}</td>
                <td className='px-2 sm:px-4 py-2'>{order.status}</td>
                <td className='px-2 sm:px-4 py-2'>
                  {order.status === 'Pending' && (
                    <button
                      className='px-2 py-1 rounded bg-blue-500 text-white'
                      onClick={() => onPickUp(order.id)}
                    >
                      Pick Up
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
