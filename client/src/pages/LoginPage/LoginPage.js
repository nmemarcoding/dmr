import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import { publicRequest } from '../../hooks/requestMethods'
import { useNavigate } from 'react-router-dom'
import useStore from '../../store';

export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' })
  const navigate = useNavigate()
  const addUserInfo = useStore((state) => state.addUserInfo)
  
  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    publicRequest()
      .post('/auth/login', formData)
      .then((res) => {
        addUserInfo(res.data)
        if (res.data.isAdmin) {
            navigate('/admin')
        }
        else {
            navigate('/')
        }
      })
      
      .catch((err) => {console.log(err)
        window.alert('Invalid email or password')
      })
  }

  return (
    <>
      <Navbar />
      <div className="w-screen md:h-screen flex justify-center md:items-center pt-4">
        <form
          className="w-11/12 md:w-96 max-w-md p-3 pt-5 shadow-2xl rounded-xl "
          onSubmit={handleSubmit}
          method="POST"
        >
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full h-10 border-2 border-gray-300 rounded-xl px-2 mb-2"
            value={formData.email}
            onChange={handleInputChange}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="w-full h-10 border-2 border-gray-300 rounded-xl px-2 mb-2"
            value={formData.password}
            onChange={handleInputChange}
          />
          <button className="w-full block h-10 bg-yellow-500 rounded-xl mt-2">
            Login
          </button>
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
