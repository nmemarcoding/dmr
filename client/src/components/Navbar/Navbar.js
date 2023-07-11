import React, { useState } from 'react'
import './Navbar.css'

export default function Navbar() {
  const [showLoginDropdown, setShowLoginDropdown] = useState(false);
  const [showSignupDropdown, setShowSignupDropdown] = useState(false);

  const toggleLoginDropdown = () => {
    setShowLoginDropdown(!showLoginDropdown);
  }

  const toggleSignupDropdown = () => {
    setShowSignupDropdown(!showSignupDropdown);
  }

  return (
    <div className="nav_container">
      <h1>DMR</h1>
      <input type="text" placeholder="Search"/>
      {/* login and signup btn */}
      <div className="nav_btns">
        <div className="login_btn" onClick={toggleLoginDropdown}>
          <span>Login</span>
          {showLoginDropdown && (
            <div className="login_dropdown">
              <form className="login_form">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Email"/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Password"/>
                <button type="submit">Login</button>
                </form>
            </div>
          )}
        </div>
        <div className="signup_btn" onClick={toggleSignupDropdown}>
          <span>Signup</span>
          {showSignupDropdown && (
            <div className="signup_dropdown">
              <forn className="signup_form">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Email"/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Password"/>
                <label htmlFor="password">Confirm Password</label>
                <input type="password" id="password" placeholder="Confirm Password"/>
                <button type="submit">Signup</button>
            </forn>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

