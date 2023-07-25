import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import CarInfoCard from '../../components/CarInfoCard/CarInfoCard'
import { publicRequest } from '../../hooks/requestMethods'

export default function CarSearchPage() {
    const [searchQuery, setSearchQuery] = useState( window.location.search.split('=')[1]|| '');
    const [cars, setCars] = useState([]);
    
    useEffect(() => {
        console.log(searchQuery);
        publicRequest().get(`/car/search?search=${searchQuery}`)

            .then(res => {
                setCars(res.data);
                
            })
            .catch(err => {
                console.log(err);
            })
    }, [searchQuery]);


    return (
        <div className="h-screen w-screen">
            <Navbar />
            
            {cars.length === 0 ? (
                <div className="text-center mt-6 p-4 sm:p-0">
                    <p className="text-2xl font-bold text-gray-500">No cars available for your search. Please search for a new car.</p>
                </div>
            ) : (
                cars.map((car) => (
                    <div key={car._id} className="mt-10 px-10">
                        <CarInfoCard car={car} />
                    </div>
                ))
            )}
          
        </div>
    )
}