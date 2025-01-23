import React from 'react'
import Login from './User/Login'
import './App.css'
import Signup from './User/Signup'
import { createBrowserRouter, createHashRouter, RouterProvider } from 'react-router-dom'
import Root from './Root/Root'
import Home from './Root/Home'
import Contact from './Root/Contact'
import Registration from './Root/Registration'
import Employees from './Root/Employees'
import Edit from './Root/Edit'


const router = createHashRouter([
  {
    path:"/",
    element:<Login></Login>
  },
  {
    path:"/signup",
    element:<Signup></Signup>
  },
  {
    path:"/login",
    element:<Login></Login>
  },
  {
    path:"/root",
    element:<Root></Root>,
    children:[
      {
        path:"/root/",
        element:<Home></Home>
      },
      {
        path:"/root/home",
        element:<Home></Home>
      },
      {
        path:"/root/registration",
        element:<Registration></Registration>
      },
      {
        path:"/root/employees",
        element:<Employees></Employees>
      },
      {
        path:"/root/contact",
        element:<Contact></Contact>
      },
      {
        path:"/root/edit/:id",
        element:<Edit></Edit>
      }

    ]
  }

  
])

const App = () => {


  return (
      <RouterProvider router={router}></RouterProvider>
  )
}

export default App