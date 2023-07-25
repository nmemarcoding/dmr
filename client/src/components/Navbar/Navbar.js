import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  }

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate(`/search?search=${searchInput}`);
  }

  return (
    <div className="flex flex-col sm:flex-row justify-between sm:items-center bg-gray-200 p-4 shadow-md border-b-4 border-yellow-400">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">DMR</h1>
        <button className="block sm:hidden ml-auto" onClick={() => setShowMenu(!showMenu)}>
          <svg className="h-6 w-6 fill-current text-gray-900" viewBox="0 0 24 24">
            {showMenu ? (
              <path fillRule="evenodd" clipRule="evenodd" d="M19 13H5V11H19V13ZM19 7H5V5H19V7ZM5 17H19V15H5V17Z" />
            ) : (
              <path fillRule="evenodd" clipRule="evenodd" d="M4 6H20V8H4V6ZM4 11H20V13H4V11ZM4 16H20V18H4V16Z" />
            )}
          </svg>
        </button>
      </div>
      <form onSubmit={handleSearchSubmit}>
        <input className="border-none rounded-md p-2 text-base w-full sm:w-80 ml-0 sm:ml-4 shadow-md bg-white text-gray-900 placeholder-gray-400 mb-4 sm:mb-0" type="text" placeholder="Search" value={searchInput} onChange={handleSearchInputChange}/>
      </form>
      <div className={`sm:flex ${showMenu ? 'block' : 'hidden'} flex flex-col sm:flex-row items-end pt-4`}>
        <Link to="/login" className="relative ml-0 sm:ml-4 cursor-pointer">
          <div className="login_btn mb-4">
            <span className="text-base font-bold text-white p-2 rounded-md bg-gray-900 shadow-md">Login</span>
          </div>
        </Link>
        <Link to="/signup" className="relative  cursor-pointer mb-4 sm:ml-4">
          <div className="signup_btn">
            <span className="text-base font-bold text-white p-2 rounded-md bg-gray-900 shadow-md">Signup</span>
          </div>
        </Link>
      </div>
    </div>
  )
}
