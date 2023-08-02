import React from 'react'
import { publicRequest } from '../../hooks/requestMethods';
import useStore from '../../store';
import { useNavigate } from 'react-router-dom';

export default function RentalDetails(props) {
  const { make, model, color, seat, fuelType, pickUpDue, price } = props.car;
  const { userInfo } = useStore()
  console.log(userInfo._id)
  const { _id } = userInfo
  const navigate = useNavigate()

  const handleReserveClick = () => {
    publicRequest().post('/order/addneworder', { carId: props.car._id, userId: _id })
        .then((res) => {
         
            window.alert('Your order has been placed')
            if (userInfo._id) {
              navigate('/orderhistory')
            }

        })
        .catch((err) => {
            console.log(err.response.data)
            window.alert(err.response.data)
        });
  };

  return (
    <>
      <div className="w-full md:w-1/2 p-4 md:p-10 rounded-lg shadow-lg bg-white">
        <img className="w-full h-64 object-cover mb-4 rounded" src="https://assets.gcs.ehi.com/content/enterprise_cros/data/vehicle/bookingCountries/US/CARS/ECAR.doi.768.high.imageSmallThreeQuarterNodePath.png/1492780366644.png" alt={`${make} ${model}`} />
        <h1 className="text-3xl font-bold text-gray-800 tracking-wide mb-4">{`${make} ${model}`}</h1>
        <h2 className="text-lg font-bold text-gray-600 tracking-wide mb-2">COLOR</h2>
        <h3 className=" text-gray-600 tracking-wide mb-2">{color}</h3>
        <div className="border-b-2 border-gray-300 mb-4\2"></div>
        <div className="border-b-2 border-gray-300 py-4">
          <h3 className="text-lg font-bold text-gray-600 tracking-wide">SEATING</h3>
          <p className="text-gray-800">{seat}</p>
        </div>
        <div className="border-b-2 border-gray-300 py-4">
          <h3 className="text-lg font-bold text-gray-600 tracking-wide">FUEL TYPE</h3>
          <p className="text-gray-800">{fuelType}</p>
        </div>
        <div className="border-b-2 border-gray-300 py-4">
          <h3 className="text-lg font-bold text-gray-600 tracking-wide">PICK-UP DUE</h3>
         <p className="text-gray-800">{new Date().toLocaleDateString()} until 6pm</p>
        </div>
        <div className="border-b-2 border-gray-300 py-4">
          <h3 className="text-lg font-bold text-gray-600 tracking-wide">PRICE</h3>
          <p className="text-gray-800">{`$${price} Per Day`}</p>
        </div>

        <div className="flex justify-center py-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded mt-4 sm:mt-0 shadow-md" onClick={handleReserveClick}>Reserve Now</button>
        </div>
      </div>
    </>
  )
}