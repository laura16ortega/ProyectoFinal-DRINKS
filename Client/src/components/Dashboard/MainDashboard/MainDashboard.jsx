import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllUsers, getProducts } from '../../../redux/actions'


const Dashboard = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllUsers())
    dispatch(getProducts())
}, [dispatch])
  
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