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
          <li onClick={() => setIsOpen(false)}>
            <Link to='/root/home'>Home</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link to='/root/registration'>Registration</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link to='/root/employees'>Employees</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link to='/root/contact'>Contact</Link>
          </li>
          <li onClick={() => setIsOpen(false)}>
            <Link to='/login'>Logout</Link>
          </li>
        </ul>      </div>

      <div className='right'>
        <Outlet />
      </div>
    </div>
  )
}

export default Root