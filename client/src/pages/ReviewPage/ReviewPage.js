import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useLocation } from 'react-router-dom'

export default function ReviewPage() {
  // get car infor from rout that send by navigate
  const car = useLocation().state.car


  return (
    <div className="h-screen w-screen">
      <Navbar/>
    </div>
  )
}
