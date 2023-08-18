import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function HeroSection() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ make: '' });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?search=${formData.make}`);
  };

  const carMakes = [
    'Acura', 'Alfa Romeo', 'Aston Martin', 'Audi', 'Bentley', 'BMW', 'Buick', 'Cadillac', 'Chevrolet', 'Chrysler',
    'Dodge', 'Ferrari', 'Fiat', 'Ford', 'Genesis', 'GMC', 'Honda', 'Hyundai', 'Infiniti', 'Jaguar', 'Jeep', 'Kia',
    'Lamborghini', 'Land Rover', 'Lexus', 'Lincoln', 'Lotus', 'Maserati', 'Mazda', 'McLaren', 'Mercedes-Benz', 'Mini',
    'Mitsubishi', 'Nissan', 'Porsche', 'Ram', 'Rolls-Royce', 'Subaru', 'Tesla', 'Toyota', 'Volkswagen', 'Volvo'
  ];

  return (
    <div className='py-10 md:py-52 px-4 md:px-10 bg-center bg-no-repeat bg-cover min-h-screen' 
         style={{backgroundImage: "url('https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')"}}>
        <div className="container mx-auto">
          <h1 className='text-4xl md:text-6xl text-black mb-5 text-center font-bold'>DMR Rental Car. Let's Go!</h1>
          <div className="bg-white shadow-2xl rounded-xl border-b-4 border-yellow-400 p-8">
              <form onSubmit={handleSubmit} className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex flex-col mb-4 md:mb-0 md:mr-4 w-full md:w-2/3">
                    <select className="border rounded px-3 py-2 w-full focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500" name="make" id="make" value={formData.make} onChange={handleInputChange}>
                      <option value="" disabled selected>Select a car make</option>
                      {carMakes.map(make => (
                        <option key={make} value={make}>{make}</option>
                      ))}
                    </select>
                </div>
                <div className="flex w-full md:w-1/4">
                  <button className="bg-yellow-500 h-12 w-full flex items-center justify-center shadow-2xl rounded-xl hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 mt-4 md:mt-0">Search</button>
                </div>
              </form>
          </div>
        </div>
    </div>
  )
}
