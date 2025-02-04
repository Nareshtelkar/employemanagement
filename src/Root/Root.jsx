import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../App.css'

const Root = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className='root'>
      <div className={`left ${isOpen ? 'active' : ''}`}>
        <h1>EMPLOYEE MANAGEMENT</h1>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={isOpen ? 'show' : ''}>
          <li>
            <Link to='/root/home' onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to='/root/registration' onClick={() => setIsOpen(false)}>Registration</Link>
          </li>
          <li>
            <Link to='/root/employees' onClick={() => setIsOpen(false)}>Employees</Link>
          </li>
          <li>
            <Link to='/root/contact' onClick={() => setIsOpen(false)}>Contact</Link>
          </li>
          <li>
            <Link to='/login' onClick={() => setIsOpen(false)}>Logout</Link>
          </li>
        </ul>
      </div>

      <div className='right'>
        <Outlet />
      </div>
    </div>
  )
}

export default Root