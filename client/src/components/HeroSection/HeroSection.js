import React from 'react'
import './HeroSection.css'

export default function HeroSection() {
  return (
    <div className='herosection_container'>
        <h1>DMR Rental Car. Let's Go!</h1>
        <div className="car_search">
            <div className="car_search_top_container">
                <div className="car_search_top_left_container">
                    {/* droup down */}
                    <select>
                        <option value="Same Drop-off Location">Same Drop-off Location</option>
                        <option value="Different Drop-off Location">Different Drop-off Location</option>
                    </select>
                </div>
                <div className="car_search_top_right_container">
                </div>
            </div>
        </div>
    </div>
  )
}
