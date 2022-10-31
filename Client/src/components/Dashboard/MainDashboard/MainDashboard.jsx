import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        <div className="flex">
            <Sidebar/>
            <div className="content w-100">
                <Navbar/>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard