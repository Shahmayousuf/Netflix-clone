import React from 'react'
import NavBar from '../Components/NavBar/NavBar'
import { Outlet } from 'react-router'

const Layout = () => {
  return (
    <div>
      <NavBar/>
      <Outlet/>
    </div>
  )
}

export default Layout
