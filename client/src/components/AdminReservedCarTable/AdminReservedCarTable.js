import React from 'react';

export default function AdminReservedCarTable({ order, onPickUp }) {
  return (
    <div className='flex flex-col items-center sm:items-start w-full px-4 sm:px-0'>

      <div className='w-full overflow-auto sm:hidden'>
        <div className='border-b border-gray-300 p-4'>
          <div className='mb-2'>
            <strong>License Plate: </strong> {order.carId.licensePlate}
          </div>
          <div className='mb-2'>
            <strong>Customer: </strong>
            {`${order.userId.firstName} ${order.userId.lastName}`}
          </div>
          <div className='mb-2'>
            <strong>Car: </strong>
            {`${order.carId.make} ${order.carId.model}`}
          </div>
          <div className='mb-2'>
            <strong>Pick Up Due: </strong>
            {new Date(order.orderTime).toLocaleDateString('en-US', {day: '2-digit', month: '2-digit', year: 'numeric'})} Until 6 PM
          </div>
          <div className='mb-2'>
            <strong>Status: </strong>
            {order.carId.available ? 'Available' : 'Not Available'}
          </div>
          {order.carId.available && (
            <button
              className='px-2 py-1 rounded bg-blue-500 text-white'
              onClick={() => onPickUp(order._id)}
            >
              Pick Up
            </button>
          )}
        </div>
      </div>
      <div className='hidden sm:block w-full'>
        <table className='table-auto w-full border border-gray-300 rounded-lg shadow-lg'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='px-2 sm:px-4 py-2'>License Plate</th>
              <th className='px-2 sm:px-4 py-2'>Customer</th>
              <th className='px-2 sm:px-4 py-2'>Car</th>
              <th className='px-2 sm:px-4 py-2'>Pick Up Due</th>
              <th className='px-2 sm:px-4 py-2'>Status</th>
              <th className='px-2 sm:px-4 py-2'>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-300'>
              <td className='px-2 sm:px-4 py-2'>{order.carId.licensePlate}</td>
              <td className='px-2 sm:px-4 py-2'>{`${order.userId.firstName} ${order.userId.lastName}`}</td>
              <td className='px-2 sm:px-4 py-2'>{`${order.carId.make} ${order.carId.model}`}</td>
              <td className='px-2 sm:px-4 py-2'>{new Date(order.orderTime).toLocaleDateString('en-US', {day: '2-digit', month: '2-digit', year: 'numeric'})} Until 6 PM</td>
              <td className='px-2 sm:px-4 py-2'>{order.carId.available ? 'Available' : 'Not Available'}</td>
              <td className='px-2 sm:px-4 py-2'>
                {order.carId.available && (
                  <button
                    className='px-2 py-1 rounded bg-blue-500 text-white'
                    onClick={() => onPickUp(order._id)}
                  >
                    Pick Up
                  </button>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
