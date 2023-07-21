import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import CarInfoCard from '../../components/CarInfoCard/CarInfoCard'

export default function CarSearchPage() {
  return (
    <div className="h-screen w-screen">
        <Navbar/>
        <div className= "mt-10 px-10">
            <CarInfoCard/>
        </div>
    </div>
  )
}
