import React from 'react';

export default function HeroSection() {
  return (
    <div className='py-10 md:py-52 px-4 md:px-10 bg-center bg-no-repeat bg-cover min-h-screen' 
         style={{backgroundImage: "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"}}>
        <h1 className='text-4xl md:text-6xl text-black mb-5 text-centet lg:text-start'>DMR Rental Car. Let's Go!</h1>
        <div className="w-full bg-white shadow-2xl rounded-xl border-b-4 border-yellow-400 p-8">
            <div className="flex flex-col md:flex-row md:justify-between ">
                <div className="flex flex-col mb-4 md:mb-0 md:mr-4 w-full md:w-1/5">
                    <label className="mb-2" htmlFor="">Pick-up date</label>
                    <input className="border rounded px-3 py-2" type="date" name="" id="" min={new Date().toISOString().substring(0, 10)} />
                </div>
                <div className="flex flex-col mb-4 md:mb-0 md:mr-4 w-full md:w-1/4">
                    <label className="mb-2" htmlFor="">Pick-up time</label>
                    <input className="border rounded px-3 py-2" type="time" name="" id="" min={new Date().toLocaleTimeString()} />
                </div>
                <div className="flex flex-col mb-4 md:mb-0 md:mr-4 w-full md:w-1/4">
                    <label className="mb-2" htmlFor="">Drop-off Date</label>
                    <input className="border rounded px-3 py-2" type="date" name="" id="" min={new Date().toISOString().substring(0, 10)} />
                </div>
                <div className="flex flex-col mb-4 md:mb-0 w-full md:w-1/4">
                    <label className="mb-2" htmlFor="">Drop-off Time</label>
                    <input className="border rounded px-3 py-2" type="time" name="" id="" min={new Date().toLocaleTimeString()} />
                </div>
                <div className="flex  mb-4 md:mb-0 w-full md:w-1/4 ">
                <button className="bg-yellow-500 h-20 w-full  flex items-center justify-center shadow-2xl rounded-xl mt-4 md:mt-0 md:ml-3">Continue</button>
                </div>
             
                
            </div>
        </div>
    </div>
  )
}