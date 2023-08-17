import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex h-full justify-center items-center">
            <div className="w-12 h-12 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
    </div>
    );
}

export default LoadingSpinner;
