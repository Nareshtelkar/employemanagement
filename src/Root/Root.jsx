import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <div>
       <h1>Root Page</h1>
       <Link to='/root/home'>Home</Link>
       <Link to='/root/service'>Service</Link>
       <Link to='/root/contact'>Contact</Link>
       <Outlet/>
      

    </div>
  )
}

export default Root