import React, { useEffect, useState } from 'react';
import useStore from '../../store';
import { useNavigate } from 'react-router-dom';

// Helper function to calculate brightness
const getTextColor = (bgColor) => {
    const color = bgColor.toLowerCase();
    if (color === 'white' || color === '#ffffff') {
        return 'black'; // Return black for white background
    } else if (color === 'yellow' || color === '#ffff00') {
        return 'black'; // Return black for yellow background
    } else {
        // Calculate brightness for other background colors
        const r = parseInt(color.substr(1, 2), 16);
        const g = parseInt(color.substr(3, 2), 16);
        const b = parseInt(color.substr(5, 2), 16);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness >= 128 ? 'black' : 'white'; // Return black for lighter colors, white for darker colors
    }
};

export default function CarInfoCard(props) {
    const { car } = props;
    const navigate = useNavigate();

    const handleSelect = () => {
        navigate('/review', { state: { car: car } });
    };

    const textColor = getTextColor(car.color); // Calculate text color based on background color
    const isWhiteBackground = car.color.toLowerCase() === 'white' || car.color.toLowerCase() === '#ffffff';

    return (
        <div className="flex flex-col sm:flex-row bg-white rounded-lg shadow-md sm:justify-between my-4 mx-2 sm:mx-0">
            <div className="sm:flex">
                <img
                    src="https://assets.gcs.ehi.com/content/enterprise_cros/data/vehicle/bookingCountries/US/CARS/ECAR.doi.768.high.imageSmallThreeQuarterNodePath.png/1492780366644.png"
                    alt={car.make}
                    className="w-full sm:w-1/4 h-48 sm:h-auto object-cover rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
                />
                <div className="flex flex-col justify-center p-4 w-full sm:w-auto sm:ml-5">
                    <h2 className="text-xl font-bold mb-2">
                        {car.make} {car.model}
                    </h2>
                    <div className={`flex ${isWhiteBackground ? 'white-color-badge' : 'normal-color-badge'} items-center sm:flex-row sm:items-center`}>
                        <h3 className="mr-4 text-xs">{car.fuelType}</h3>
                        <div
                            className={`mr-4 text-xs rounded-lg py-1 px-3 ${isWhiteBackground ? 'white-bg black-color border border-black' : ''}`}
                            style={{ backgroundColor: car.color, color: textColor }}
                        >
                            {car.color}
                        </div>
                        <h3 className="text-xs">{car.seat} people</h3>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center p-4 w-full sm:w-auto">
                <div className="flex items-center">
                    <p className="text-2xl font-bold mb-2">${car.price}</p>
                    <p className="ml-2">Per Day</p>
                </div>
                <button
                    onClick={handleSelect}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 sm:mt-0"
                >
                    Select
                </button>
            </div>
        </div>
    );
}
