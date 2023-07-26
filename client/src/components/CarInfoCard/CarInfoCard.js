import React, { useEffect, useState } from 'react'
import useStore from '../../store';
import { useNavigate } from 'react-router-dom'

export default function CarInfoCard(props) {
    const{car} = props;
    const navigate = useNavigate()

    const [userInfo,setUserInfo] = useState()

    useEffect(() => {
        const userInfo = useStore.getState().userInfo
        // check if userInfo date is less or equal to 3days then set userInfo 
        const today = new Date()
        const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
        const userInfoDate = new Date(userInfo.date)
        const diffTime = Math.abs(today - userInfoDate);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if(diffDays <= 3){
            setUserInfo(userInfo)
        }
    }, [])

    const handleSelect = () => {
        if (!userInfo) {
            navigate('/login')
        } else {
            // mavigate to review page and send car info to review page
            navigate('/review', {state: {car: car}})

        }
    }

    return (
        <div className="flex flex-col sm:flex-row bg-white rounded-lg shadow-md sm:justify-between my-4 mx-2 sm:mx-0">
            <div className="sm:flex">
                <img src="https://assets.gcs.ehi.com/content/enterprise_cros/data/vehicle/bookingCountries/US/CARS/ECAR.doi.768.high.imageSmallThreeQuarterNodePath.png/1492780366644.png" alt={car.make} className="w-full sm:w-1/4 h-48 sm:h-auto object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-t-none" />
                <div className="flex flex-col justify-center p-4 w-full sm:w-auto sm:ml-5">
                    <h2 className="text-xl font-bold mb-2">{car.make} {car.model}</h2>
                    <div className="flex sm:flex-col md:flex-row">
                        <h3 className="mr-4 text-xs">{car.fuelType}</h3>
                        <h3 className="text-xs">{car.seat} people</h3>
                    </div>
                </div>
            </div>
          
            <div className="flex flex-col justify-center p-4 w-full sm:w-auto">
                <div className="flex items-center">
                    <p className="text-2xl font-bold mb-2">${car.price}</p>
                    <p className="ml-2">Per Day</p>
                </div>
                <button onClick={handleSelect} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 sm:mt-0">
                Select
                </button>
            </div>
        </div>
    )
}
