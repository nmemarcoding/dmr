import React from 'react'
import './HeroSection.css'

export default function HeroSection() {
  return (
    <div className='herosection_container'>
        <h1>DMR Rental Car. Let's Go!</h1>
        <div className="car_search">
            <div className="w-full h-full flex items-center justify-between">
                <div className="flex flex-col">
                <label htmlFor="">Pick-up date</label>
                <input type="date" name="" id="" min={new Date().toISOString().substr(0, 10)}/>
                </div>
                <div className="flex flex-col">
                <label htmlFor="">Pick-up time</label>
                <input type="time" name="" id="" min={new Date().toLocaleTimeString()}  />
                </div>
                <div className="flex flex-col">
                <label htmlFor="">Drop-off Date</label>
                <input type="date" name="" id="" min={new Date().toISOString().substr(0, 10)} />
                </div>
                <div className="flex flex-col">
                <label htmlFor="">Drop-off Time</label>
                <input type="time" name="" id="" min={new Date().toLocaleTimeString()}  />
                </div>
                {/* yellow continuew btn */}
                <btn className="bg-yellow-500 h-20 w-40 flex items-center justify-center shadow-xl rounded-xl">Continue</btn>

                

            </div>
        </div>
    </div>
  )
}
