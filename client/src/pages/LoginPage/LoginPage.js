import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { Link } from 'react-router-dom'

export default function LoginPage() {
  return (
    <>
    <Navbar/>
    <div className="w-screen md:h-screen flex justify-center md:items-center pt-4">
        <form className="w-11/12 md:w-96 max-w-md p-3 pt-5 shadow-2xl rounded-xl ">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" className="w-full h-10 border-2 border-gray-300 rounded-xl px-2 mb-2"/>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" className="w-full h-10 border-2 border-gray-300 rounded-xl px-2 mb-2"/>
            <button className="w-full block h-10 bg-yellow-500 rounded-xl mt-2">Login</button>
            <p className="text-center mt-2">
                If you don't have an account{' '}
                <Link to="/signup" className="text-yellow-500">
                    Create New One
                </Link>
            </p>

        </form>
    </div>
    </>
  )
}