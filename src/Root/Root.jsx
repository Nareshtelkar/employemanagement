import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div className='root'>
      <div className='left'>
        <h1>EMPLOYEE MANAGEMENT</h1>
        <ul>
          <li>
            <Link to='/root/home'>Home</Link>
          </li>
          <li>
            <Link to='/root/registration'>Registration</Link>
          </li>
          <li>
            <Link to='/root/employees'>Employees</Link>
          </li>
          <li>
            <Link to='/root/contact'>Contact</Link>
          </li>
          <li>
            <Link to='/login'>Logout</Link>
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