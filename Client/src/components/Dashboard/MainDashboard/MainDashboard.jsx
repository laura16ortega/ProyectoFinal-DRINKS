import React from 'react'
import Navbar from './Navbar'
import Sidebar from '../Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllUsers, getProducts } from '../../../redux/actions'
import Home from '../Home/Home'
import Topbar from '../TopBar/TopBar'


const Dashboard = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllUsers())
    dispatch(getProducts())
}, [dispatch])
  
  return (
    <div>
      <Topbar/>
        <div style={{display: "flex"}}>
            <Sidebar/>
            <div className="content w-100" style={{paddingTop: "10px", backgroundColor: "white"}}>
                <Outlet/>
            </div>
        </div>
    </div>
  )
}

export default Dashboard

/*

<Router>
  <div>
    <Topbar />
    <div className="container">
      <Sidebar />
      <Home />
      <Routes>
        <Route path="/" exact={true} component={Home} />
        <Route path="/products" exact={true} component={Products} />
        <Route path="/users" exact={true} component={Users} />
      </Routes>
    </div>
  </div>
</Router>

.container{
  display: flex;
  margin-top: 10px;
}

*/