import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useLocation } from 'react-router-dom'
import RentalDetails from '../../components/RentalDetails/RentalDetails'

export default function ReviewPage() {
  // get car infor from rout that send by navigate
  const car = useLocation().state.car
  console.log(car)

  return (
    <div className="h-screen w-screen ">
      <Navbar/>
      <h1 class="text-4xl font-bold text-gray-800 tracking-wide py-10 px-7 border-b-2 border-gray-300">Rental Details</h1>
     <div className="flex w-full justify-center">
        <RentalDetails/>
      </div> 
    </div>
  )
}
