import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import { publicRequest } from '../../hooks/requestMethods'

export default function OrderDetailsPage() {
  const location = useLocation()
  const [orderId, setOrderId] = useState(null)
  const [orderDetails, setOrderDetails] = useState(null)

  useEffect(() => {
    if (!orderId) return
    publicRequest()
        .get(`/order/getorderdetails/${orderId}`)
        .then((res) => {
            setOrderDetails(res.data)
        })
        .catch((err) => console.log(err))
    }, [orderId])

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search)
    const orderIdFromUrl = searchParams.get('orderid')
    setOrderId(orderIdFromUrl)
  }, [location.search])

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-3xl font-bold mb-4">Order Details</h1>
        {orderDetails && (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-center mb-4">
              <img src="https://assets.gcs.ehi.com/content/enterprise_cros/data/vehicle/bookingCountries/US/CARS/ECAR.doi.768.high.imageSmallThreeQuarterNodePath.png/1492780366644.png" alt="Car" className="w-full sm:w-64 h-48 object-cover rounded-lg" />
            </div>
            <div className="flex justify-between mb-4">
              <div className="font-bold text-gray-600">Order ID:</div>
              <div className="text-gray-800">{orderDetails._id}</div>
            </div>
           <div className="flex justify-between mb-4">
                <div className="font-bold text-gray-600">Car Info:</div>
                <div className="text-gray-800">{orderDetails.carId.make} {orderDetails.carId.model} - {orderDetails.carId.type} {orderDetails.carId.type === 'SUV' ? '' : '-'} {orderDetails.carId.seat} {orderDetails.carId.type === 'SUV' ? 'seater' : 'seats'}</div>
            </div>
            <div className="flex justify-between mb-4">
              <div className="font-bold text-gray-600">Due Time to Pick Up:</div>
              <div className="text-gray-800">
                {new Date(orderDetails.orderTime).toLocaleDateString('en-US')} 6 PM
              </div>
            </div>
            <div className="flex justify-between mb-4">
              <div className="font-bold text-gray-600">Status of Pick Up:</div>
              <div className="text-red-600">{orderDetails.returnTime ? 'Returned' : 'Not Picked Up'}</div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
