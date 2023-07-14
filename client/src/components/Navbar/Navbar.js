import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center bg-gray-200 p-4 shadow-md border-b-4 border-yellow-400">
      <h1 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">DMR</h1>
      <input className="border-none rounded-md p-2 text-base w-full sm:w-80 ml-0 sm:ml-4 shadow-md bg-white text-gray-900 placeholder-gray-400 mb-4 sm:mb-0" type="text" placeholder="Search"/>
      <div className="flex items-center">
        <Link to="/login" className="relative ml-0 sm:ml-4 cursor-pointer">
          <div className="login_btn">
            <span className="text-base font-bold text-white p-2 rounded-md bg-gray-900 shadow-md">Login</span>
          </div>
        </Link>
        <Link to="/signup" className="relative ml-4 cursor-pointer">
          <div className="signup_btn">
            <span className="text-base font-bold text-white p-2 rounded-md bg-gray-900 shadow-md">Signup</span>
          </div>
        </Link>
      </div>
    </div>
  )
}