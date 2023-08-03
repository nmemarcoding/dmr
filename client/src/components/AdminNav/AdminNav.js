import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdminNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="bg-white shadow-2xl border-b-4 border-yellow-500 ">
        <nav className="flex items-center justify-between p-4">
          <div className="text-black text-lg font-bold">Admin Dashboard</div>
          <button
            className="text-black focus:outline-none md:hidden"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19.293 4.293a1 1 0 0 0-1.414 0L12 10.586 5.707 4.293a1 1 0 1 0-1.414 1.414L10.586 12l-6.293 6.293a1 1 0 1 0 1.414 1.414L12 13.414l6.293 6.293a1 1 0 0 0 1.414-1.414L13.414 12l6.293-6.293a1 1 0 0 0 0-1.414z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1z"
                />
              )}
            </svg>
          </button>
          {/* Add a container for desktop menu options */}
          <ul className="hidden md:flex">
            <li>
              <Link
                to="/admin"
                className="text-black hover:text-gray-200 px-4 py-2 rounded-md"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/admin/reservedcars"
                className="text-black hover:text-gray-200 px-4 py-2 rounded-md"
              >
                Reserved Cars
              </Link>
            </li>
            <li>
              <Link
                to="/admin/addnewcar"
                className="text-black hover:text-gray-200 px-4 py-2 rounded-md"
              >
                Add New Car
              </Link>
            </li>
            <li>
              <Link
                to="/admin/cars"
                className="text-black hover:text-gray-200 px-4 py-2 rounded-md"
              >
                Cars
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      {isMenuOpen && (
        <div className="md:hidden  flex justify-end h-full  ">
          <ul className="py-4 px-8 w-auto inline-block bg-white shadow-xl ">
            <li className="mb-4 shadow-md pl-4">
              <Link
                to="/admin"
                className="text-black hover:text-gray-200 py-2 rounded-md"
                onClick={toggleMenu}
              >
                Dashboard
              </Link>
            </li>
            <li className="mb-4 shadow-md px-4">
              <Link
                to="/admin/reservedcars"
                className="text-black hover:text-gray-200 py-2 rounded-md"
                onClick={toggleMenu}
              >
                Reserved Cars
              </Link>
            </li>
            <li className="mb-4 shadow-md px-4">
              <Link
                to="/admin/addnewcar"
                className="text-black hover:text-gray-200 py-2 rounded-md"
                onClick={toggleMenu}
              >
                Add New Car
              </Link>
            </li>
            <li className="mb-4 shadow-md px-4">
              <Link
                to="/admin/cars"
                className="text-black hover:text-gray-200 py-2 rounded-md"
                onClick={toggleMenu}
              >
                Cars
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default AdminNav;