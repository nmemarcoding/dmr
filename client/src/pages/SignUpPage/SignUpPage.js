import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import { publicRequest } from '../../hooks/requestMethods'
import { useNavigate } from 'react-router-dom'

export default function SignUpPage() {
  const [formData, setFormData] = useState({});
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match");
        return;
    }
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
        alert("Password must contain at least one letter, one number, and one symbol");
        return;
    }
    publicRequest().post('/auth/register', formData)
        .then(res => {
            navigate('/login');
        })
        .catch(err => console.log(err))
}

  return (
    <>
    <Navbar/>
    <div className='w-screen h-screen flex justify-center items-center'>
        <form className="w-11/12 md:w-96 p-3 pt-5 shadow-2xl rounded-xl" onSubmit={handleSubmit} method="POST">
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" className="w-full h-10 border-2 border-gray-300 rounded-xl pl-4 mb-2" onChange={(e) => setFormData({...formData, firstName: e.target.value})} required/>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName" className="w-full h-10 border-2 border-gray-300 rounded-xl pl-4 mb-2" onChange={(e) => setFormData({...formData, lastName: e.target.value})} required/>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" className="w-full h-10 border-2 border-gray-300 rounded-xl pl-4 mb-2" onChange={(e) => setFormData({...formData, email: e.target.value})} required/>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="tel" name="phoneNumber" id="phoneNumber" className="w-full h-10 border-2 border-gray-300 rounded-xl pl-4 mb-2" onChange={(e) => setFormData({...formData, phoneNumber: e.target.value})} pattern="[0-9]*" minLength="10" maxLength="10" required/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" className="w-full h-10 border-2 border-gray-300 rounded-xl pl-4 mb-2" onChange={(e) => setFormData({...formData, password: e.target.value})} required/>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" name="confirmPassword" id="confirmPassword" className="w-full h-10 border-2 border-gray-300 rounded-xl pl-4 mb-2" onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})} required/>
            <button className="w-full h-10 bg-yellow-500 rounded-xl mt-4" >Sign Up</button>
            <p className="text-center mt-2">
                If you have an account{' '}
                <Link to="/login" className="text-yellow-500">
                    Login
                </Link>
            </p>

        </form>
    </div>
    </>
  )
}