import React from 'react'
import Sidebar from './layouts/sidebar/Sidebar'
import Navbar from './layouts/navbar/Navbar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div className='flex h-full'>
      <Sidebar />
      {/* Vertical border */}
      <div className="border-l h-screen border-borderColor"></div>
      <div className='h-full w-full'>
        <Navbar />
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard
