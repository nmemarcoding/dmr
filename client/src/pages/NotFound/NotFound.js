import React from 'react';

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 sm:px-0">
      <div className="text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-lg sm:text-xl text-gray-600 mb-8">Oops! The page you're looking for doesn't exist.</p>
        <a href="/" className="text-white bg-blue-500 hover:bg-blue-600 px-4 sm:px-6 py-2 rounded-full transition duration-300">Go back to homepage</a>
      </div>
    </div>
  );
}

export default NotFound;
