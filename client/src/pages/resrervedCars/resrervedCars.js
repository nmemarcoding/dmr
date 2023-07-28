import React, { useEffect, useState } from 'react';
import AdminNav from '../../components/AdminNav/AdminNav';
import AdminReservedCarTable from '../../components/AdminReservedCarTable/AdminReservedCarTable';
import { publicRequest } from '../../hooks/requestMethods'

export default function ReservedCars() {
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOption, setSortOption] = useState('id'); 
    const [ordersDetails, setOrderDetails] = useState([]);
    const orders = [
      { id: 1, customer: 'John Doe', car: 'Toyota Camry', date: '2021-10-01', status: 'Pending' },
      { id: 2, customer: 'Jane Smith', car: 'Honda Civic', date: '2021-10-02', status: 'Delivered' },
      { id: 3, customer: 'Bob Johnson', car: 'Ford Mustang', date: '2021-10-03', status: 'Cancelled' },
      { id: 4, customer: 'Alice Brown', car: 'Tesla Model S', date: '2021-10-04', status: 'Pending' },
      { id: 5, customer: 'Charlie Green', car: 'Chevrolet Corvette', date: '2021-10-05', status: 'Delivered' },
      { id: 6, customer: 'David Lee', car: 'BMW X5', date: '2021-10-06', status: 'Cancelled' },
      { id: 7, customer: 'Emily Davis', car: 'Audi Q7', date: '2021-10-07', status: 'Pending' },
      { id: 8, customer: 'Frank Wilson', car: 'Mercedes-Benz C-Class', date: '2021-10-08', status: 'Delivered' },
      { id: 9, customer: 'Grace Taylor', car: 'Lexus ES', date: '2021-10-09', status: 'Cancelled' },
      { id: 10, customer: 'Henry Martin', car: 'Porsche 911', date: '2021-10-10', status: 'Pending' },
    ];

    useEffect(() => {
        publicRequest().get('/order/getallorders')
        .then((res) => {
            setOrderDetails(res.data);
        })
        .catch((err) => console.log(err))
    }, []);


  
    const handleSearch = (event) => {
      setSearchTerm(event.target.value);
    };
  
    const handleSort = (event) => {
      setSortOption(event.target.value);
    };
  
    return (
      <div className='w-full px-2 sm:px-4 lg:px-0'>
        <AdminNav />
        <AdminReservedCarTable 
          orders={ordersDetails} 
          searchTerm={searchTerm} 
          sortOption={sortOption} 
          handleSearch={handleSearch} 
          handleSort={handleSort} 
        />
      </div>
    );
  }
