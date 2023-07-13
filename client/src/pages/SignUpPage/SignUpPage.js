import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'

export default function SignUpPage() {

  return (
    <>
    <Navbar/>
    <div className='w-screen h-screen flex justify-center items-center'>
        <form className="w-11/12 md:w-96 p-3 pt-5 shadow-2xl rounded-xl">
            <label htmlFor="firstName">First Name</label>
            <input type="text" name="firstName" id="firstName" className="w-full h-10 border-2 border-gray-300 rounded-xl pl-4 mb-2"/>
            <label htmlFor="lastName">Last Name</label>
            <input type="text" name="lastName" id="lastName" className="w-full h-10 border-2 border-gray-300 rounded-xl pl-4 mb-2"/>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" className="w-full h-10 border-2 border-gray-300 rounded-xl pl-4 mb-2"/>
            <label htmlFor="phoneNumber">Phone Number</label>
            <input type="tel" name="phoneNumber" id="phoneNumber" className="w-full h-10 border-2 border-gray-300 rounded-xl pl-4 mb-2"/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" className="w-full h-10 border-2 border-gray-300 rounded-xl pl-4 mb-2"/>
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" name="confirmPassword" id="confirmPassword" className="w-full h-10 border-2 border-gray-300 rounded-xl pl-4 mb-2"/>
            <button className="w-full h-10 bg-yellow-500 rounded-xl mt-4">Sign Up</button>
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