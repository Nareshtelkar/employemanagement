import React from 'react'
import Login from './User/Login'
import './App.css'
import Signup from './User/Signup'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root/Root'
import Home from './Root/Home'
import Service from './Root/Service'
import Contact from './Root/Contact'


const router = createBrowserRouter([
  {
    path:"/",
    element:<Signup></Signup>
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
        path:"/root/service",
        element:<Service></Service>
      },
      {
        path:"/root/contact",
        element:<Contact></Contact>
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