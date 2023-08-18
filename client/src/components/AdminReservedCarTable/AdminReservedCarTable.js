import React from 'react';

export default function AdminReservedCarTable({ order, onPickUp, handelPickUp, handelReturn }) {
  const pickUpOnClick = () => {
    handelPickUp(order._id);
  };
  
  const returnOnClick = () => {
    handelReturn(order._id);
  };
  
  const isOrderCancelled = () => {
    const oneDayInMillis = 24 * 60 * 60 * 1000;
    const orderTimeInMillis = new Date(order.orderTime).getTime();
    const currentTimeInMillis = new Date().getTime();
    return currentTimeInMillis - orderTimeInMillis > oneDayInMillis;
  };

  const displayActions = () => {
    if (order.returnTime && order.pickUpTime) {
        return <div className=''>Returned</div>;
    }
    if (isOrderCancelled()) {
        return <div className='text-red-600'>Cancelled</div>;
    }
    if (order.pickUpTime && !order.returnTime && !order.carId.available) {
      return (
        <button
          className='px-2 py-1 rounded bg-red-500 text-white hover:bg-red-700 focus:outline-none focus:shadow-outline-red'
          onClick={returnOnClick}
        >
          Return
        </button>
      );
    }
    if (order.carId.available && !order.returnTime && !order.pickUpTime) {
      return (
        <button
          className='px-2 py-1 rounded bg-yellow-500 text-white hover:bg-yellow-700 focus:outline-none focus:shadow-outline-yellow'
          onClick={pickUpOnClick}
        >
          Pick Up
        </button>
      );
    }
  };

  return (
    <div className='flex flex-col items-center sm:items-start w-full px-4 sm:px-0'>
      <div className='w-full overflow-auto sm:hidden'>
        <div className='border-b border-gray-300 p-4'>
          <div className='mb-2'>
            <strong className='font-bold'>License plate: </strong> {order.carId.licensePlateNumber}
          </div>
          <div className='mb-2'>
            <strong className='font-bold'>Customer: </strong>
            {`${order.userId?.firstName} ${order.userId?.lastName}`}
          </div>
          <div className='mb-2'>
            <strong className='font-bold'>Car: </strong>
            {`${order.carId.make} ${order.carId.model}`}
          </div>
          <div className='mb-2'>
            <strong className='font-bold'>Pick Up Due: </strong>
            {new Date(order.orderTime).toLocaleDateString('en-US', {day: '2-digit', month: '2-digit', year: 'numeric'})} Until 6 PM
          </div>
          <div className='mb-2'>
            <strong className='font-bold'>Status: </strong>
            {order.carId.available ? 'Available' : 'Not Available'}
          </div>
          <div className='mb-2'>
            <strong className='font-bold'>Order Total: </strong> ${order.total}
          </div>
          {displayActions()}
        </div>
      </div>
      <div className='hidden sm:block w-full'>
        <table className='table-auto w-full border border-gray-300 rounded-lg shadow-lg'>
          <thead>
            <tr className='bg-gray-200'>
              <th className='px-2 sm:px-4 py-2'>License plate</th>
              <th className='px-2 sm:px-4 py-2'>Customer</th>
              <th className='px-2 sm:px-4 py-2'>Car</th>
              <th className='px-2 sm:px-4 py-2'>Pick Up Due</th>
              <th className='px-2 sm:px-4 py-2'>Status</th>
              <th className='px-2 sm:px-4 py-2'>Order Total</th>
              <th className='px-2 sm:px-4 py-2'>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className='border-b border-gray-300'>
              <td className='px-2 sm:px-4 py-2'>{order.carId.licensePlateNumber}</td>
              <td className='px-2 sm:px-4 py-2'>{`${order.userId?.firstName} ${order.userId?.lastName}`}</td>
              <td className='px-2 sm:px-4 py-2'>{`${order.carId.make} ${order.carId.model}`}</td>
              <td className='px-2 sm:px-4 py-2'>{new Date(order.orderTime).toLocaleDateString('en-US', {day: '2-digit', month: '2-digit', year: 'numeric'})} Until 6 PM</td>
              <td className='px-2 sm:px-4 py-2'>{order.carId.available ? 'Available' : 'Not Available'}</td>
              <td className='px-2 sm:px-4 py-2'>${order.total ? order.total.toFixed(2) : "N/A"}</td>
              <td className='px-2 sm:px-4 py-2'>
                {displayActions()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
