import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

export default function Navbar() {
 
  return (
    <div className="nav_container">
      <h1>DMR</h1>
      <input type="text" placeholder="Search"/>
      <div className="nav_btns">
        <Link to="/login">
        <div className="login_btn">
          <span>Login</span>
        </div>
        </Link>
        <Link to="/signup">
        <div className="signup_btn">
          <span>Signup</span>
        </div>
        </Link>
      </div>
    </div>
  )
}

