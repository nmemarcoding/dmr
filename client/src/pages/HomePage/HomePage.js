import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './HomePage.css'
import HeroSection from '../../components/HeroSection/HeroSection'

export default function HomePage() {
  return (
    <div className='homePage_container'>
        <Navbar/>
        <div className="HeroSection_container">
             <HeroSection />
        </div>
       
    </div>
  )
}
