import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import HeroSection from '../../components/HeroSection/HeroSection'

export default function HomePage() {
  return (
    <div className='w-screen'>
        <Navbar/>
        <div className="HeroSection_container">
             <HeroSection />
        </div>
       
    </div>
  )
}
